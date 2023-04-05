using Microsoft.AspNetCore.Mvc;
using mission14_ev244.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission14_ev244.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<MoviesAPIData> Get()
        {
            var x = context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title).ToArray();

            return x;
        }
    }
}
