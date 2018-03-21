using AngularMvc.Auth;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AngularMvc.Data
{
    // TODO: Try to inherit from IdentityUserContext. This class does not contains all non required roles end claims stuff
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
            
        }
    }
}