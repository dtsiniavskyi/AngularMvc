using Microsoft.AspNetCore.Identity;

namespace AngularCore.Auth
{
    public class ApplicationUser : IdentityUser
    { 
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // TODO: Remove Location and Locale for now
        public string Location { get; set; }
        public string Locale { get; set; }
    }
}