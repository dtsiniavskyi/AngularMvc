using Microsoft.AspNetCore.Identity;

namespace AngularMvc.Auth
{
    public class User : IdentityUser
    { 
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public long? FacebookId { get; set; }
        public string PictureUrl { get; set; }
        
        public string IdentityId { get; set; }
        public IdentityUser Identity { get; set; }  // navigation property

        public string Location { get; set; }
        public string Locale { get; set; }
        public string Gender { get; set; }
    }
}