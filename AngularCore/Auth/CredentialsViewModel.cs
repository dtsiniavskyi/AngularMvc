using System.ComponentModel.DataAnnotations;

namespace AngularCore.Auth
{
    public class CredentialsViewModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
