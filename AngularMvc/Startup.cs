using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using AngularMvc.Data;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using AngularMvc.Auth;
using Microsoft.AspNetCore.Identity;

namespace AngularMvc
{
    public class Startup
    {
        public IConfiguration _configuration { get; }

        // Inject project configuration
        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime.
        // Use this method to add services to the conteiner.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Add Database Context
            // TODO: Extract to external extension method .AddApplicationDbContext()
            var connetctionString = _configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connetctionString,
                b => b.MigrationsAssembly("AngularMvc")));

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


            services.AddAutoMapper();
            services.AddMvc();
        }

        // This method gets called by the runtime.
        // Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
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
