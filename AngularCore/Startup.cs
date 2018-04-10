using AngularCore.Auth;
using AngularCore.Data;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IO;
using System.Net;
using System.Text;

namespace AngularCore
{
    // TODO: Try to make Startup partial and split all configure service operations into separate methods
    public class Startup
    {
        // TODO: Get this from somewhere secure, possibly configuration !!!
        private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH";
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

        public IConfiguration _configuration { get; }

        // Inject project configuration
        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime.
        // Use this method to add services to the conteiner.
        public void ConfigureServices(IServiceCollection services)
        {
            #region Database
            // Add Database Context
            // TODO: Extract to external extension method .AddDatabase()
            var connetctionString = _configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connetctionString, b => b.MigrationsAssembly("AngularCore")));
            #endregion

            #region JWT
            // TODO: Extract to external extension method .AddJWT()

            // JWT wire up
            services.AddSingleton<IJwtFactory, JwtFactory>();

            // Get options from app settings            
            var jwtAppSettingOptions = _configuration.GetSection(nameof(JwtIssuerOptions));

            // Configure JwtIssuerOptions
            services.Configure<JwtIssuerOptions>(options =>
            {
                options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
                options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
            });

            //  Configure JWT auth
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

                ValidateAudience = true,
                ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,

                RequireExpirationTime = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            };

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(configureOptions =>
            {
                configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                configureOptions.TokenValidationParameters = tokenValidationParameters;
                configureOptions.SaveToken = true;
            });

            // api user claim policy
            services.AddAuthorization(options =>
            {
                options.AddPolicy("ApiUser", policy => policy.RequireClaim(JwtClaimTypes.Rol, JwtClaims.ApiAccess));
            });            
            #endregion

            #region Identity
            // Add Identity 
            // TODO: Extract to external extension method .AddIdentity()
            var builder = services.AddIdentityCore<ApplicationUser>(o =>
            {
                // Configure Identity options
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 6;
            });
            builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
            builder.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();
            #endregion
            
            services.AddAutoMapper();
            services.AddMvc();
        }

        // This method gets called by the runtime.
        // Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            // TODO: Add development configuration
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();

            // TODO: Implement better Error Handling
            // TODO: Extract implementations to external files
            app.UseExceptionHandler(builder =>
                {
                    builder.Run(async context =>
                        {
                            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                            context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

                            var error = context.Features.Get<IExceptionHandlerFeature>();
                            if (error != null)
                            {
                                context.Response.AddApplicationError(error.Error.Message);
                                await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                            }
                        });
                });


            // Redirect any non-API calls to the Angular application
            // so our application can handle the routing
            app.Use(async (context, next) => {
                await next();

                if (
                    context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/")
                    )
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            // Configure application for usage as API
            // with default route of '/api/[Controller]'
            app.UseMvcWithDefaultRoute();

            // Configures application to serve the index.html file from /wwwroot
            // when you access the server from a browser
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
