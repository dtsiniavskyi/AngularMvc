using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AngularMvc
{
    public static class Extensions
    {
        public static ModelStateDictionary AddErrors(this ModelStateDictionary modelState, IdentityResult identityResult)
        {
            foreach (var e in identityResult.Errors)            
                modelState.TryAddModelError(e.Code, e.Description);            

            return modelState;
        }

        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            // CORS
            response.Headers.Add("access-control-expose-headers", "Application-Error");
        }
    }
}