using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using AngularMvc.Data;
using Microsoft.Extensions.Configuration;

namespace AngularMvc
{
    public class Startup
    {
        public IConfiguration _configuration { get; }

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime.
        // Use this method to add services to the conteiner.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var connetcionString = _configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connetcionString,
                b => b.MigrationsAssembly("AngularMvc")));

            services.AddMvc();
        }

        // This method gets called by the runtime.
        // Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
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
