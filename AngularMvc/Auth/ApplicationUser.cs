using Microsoft.AspNetCore.Identity;

namespace AngularMvc.Auth
{
    public class ApplicationUser : IdentityUser
    { 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        //public string IdentityId { get; set; }
        //public IdentityUser Identity { get; set; }  // navigation property

        public string Location { get; set; }
        public string Locale { get; set; }
    }
}