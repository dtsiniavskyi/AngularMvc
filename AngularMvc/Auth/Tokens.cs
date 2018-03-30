using Newtonsoft.Json;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AngularMvc.Auth
{
    // TODO: Refactor, possibly move this method to IJwtFactory
    // TODO: This method should return only the token ... id and expires are the part of a payload
    // and can be deserealized on the client.
    // TODO: Consider refactoring using .net libraries from jwt.io
    // https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet
    public class Tokens
    {
        public static async Task<string> GenerateJwt(ClaimsIdentity identity, IJwtFactory jwtFactory, string userName, JwtIssuerOptions jwtOptions, JsonSerializerSettings serializerSettings)
        {
            var response = new
            {
                id = identity.Claims.Single(c => c.Type == "id").Value,
                auth_token = await jwtFactory.GenerateEncodedToken(userName, identity),
                expires_in = (int)jwtOptions.ValidFor.TotalSeconds
            };

            var json = JsonConvert.SerializeObject(response, serializerSettings);
            return json;
        }
    }
}
