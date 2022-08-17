using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddIdentityCore<AppUser>(opt => {
                opt.Password.RequireNonAlphanumeric = false;
            })
            .AddRoles<AppRole>()
            .AddRoleManager<RoleManager<AppRole>>()
            .AddSignInManager<SignInManager<AppUser>>()
            .AddRoleValidator<RoleValidator<AppRole>>()
            .AddEntityFrameworkStores<DataContext>();

            services.AddAuthentication();

            return services;
        }

        // public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        // {
        //     var builder = services.AddIdentityCore<AppUser>();
        //     builder = new IdentityBuilder(builder.UserType,builder.Services);
        //     builder.AddEntityFrameworkStores<DataContext>();
        //     builder.AddSignInManager<SignInManager<AppUser>>();

        //     services.AddAuthentication();

        //     return services;
        // }

    }
}