using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using TvshowApi.DatabaseSettings;
using TvshowApi.Services;

namespace TvshowApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TvshowApi", Version = "v1" });
            });
        
            services.Configure<TvshowDatabaseSettings>(
                Configuration.GetSection(nameof(TvshowDatabaseSettings))
            );

            services.Configure<UpcomingShowDatabaseSettings>(
                Configuration.GetSection(nameof(UpcomingShowDatabaseSettings))
            );

            services.AddSingleton<ITvshowDatabaseSettings>(
                sp => sp.GetRequiredService<IOptions<TvshowDatabaseSettings>>().Value
            );

            services.AddSingleton<IUpcomingShowDatabaseSettings>(
                sp => sp.GetRequiredService<IOptions<UpcomingShowDatabaseSettings>>().Value
            );

            services.AddSingleton<TvshowService>();
            services.AddSingleton<UpcomingShowService>();

            services.AddCors(
                options => {
                    options.AddPolicy("AllowAll",
                        builder => builder
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader()      
                    );
                }
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TvshowApi v1"));
            }

            app.UseCors("AllowAll");
            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
