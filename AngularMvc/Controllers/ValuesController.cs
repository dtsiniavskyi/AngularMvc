using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularMvc.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new[] { "value1", "value2" };
        }
    }
}