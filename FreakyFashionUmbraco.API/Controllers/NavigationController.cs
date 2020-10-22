using System.Linq;
using Umbraco.Web.WebApi;
using Umbraco.Web;
using FreakyFashionUmbraco.API.Models.Navigation;

namespace FreakyFashionUmbraco.API.Controllers
{
    public class NavigationController : UmbracoApiController
    {
        // GET: umbraco/api/Navigation/GetNavbar
        public Navbar GetNavbar()
        {
            var home = Umbraco.ContentAtRoot().FirstOrDefault();

            var companyName = home?.Value("companyName").ToString();

            var navLinks = home?.Descendants()
                .Where(p => p.ContentType.Alias == "categoryPage" && p.Value("visibleInNavbar").Equals(true))
                .Select(c => new NavLink(c.Name, c.Url()));

            var navbar = new Navbar(companyName, navLinks);

            return navbar;
        }
    }
}
