using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;

namespace AngularMvc
{
    // TODO: Move extensions to a folder
    public static class Extensions
    {
        public static ModelStateDictionary AddErrors(this ModelStateDictionary modelState, IdentityResult identityResult)
        {
            foreach (var e in identityResult.Errors)            
                modelState.TryAddModelError(e.Code, e.Description);            

            return modelState;
        }

        public static ModelStateDictionary AddError(this ModelStateDictionary modelState, string code, string description)
        {
            modelState.TryAddModelError(code, description);
            return modelState;
        }

        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            // CORS
            response.Headers.Add("access-control-expose-headers", "Application-Error");
        }

        // TODO: Find a way to extrtac all such methods to external libraries or use existing third party ones
        /// <returns>Date converted to seconds since Unix epoch (Jan 1, 1970, midnight UTC).</returns>
        public static long ToUnixTimeStamp(this DateTime dateTime)
        {
            var offset = new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero);
            var universalTime = dateTime.ToUniversalTime();

            var delta = Math.Round((universalTime - offset).TotalSeconds);
            return (long)delta;
        }
    }
}