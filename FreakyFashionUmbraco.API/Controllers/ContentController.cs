using System.Linq;
using Umbraco.Web.WebApi;
using Umbraco.Web;
using FreakyFashionUmbraco.API.Models;
using Umbraco.Web.PublishedModels;

namespace FreakyFashionUmbraco.API.Controllers
{
    public class ContentController : UmbracoApiController
    {
        private HomePage Home => Umbraco.ContentAtRoot().DescendantsOrSelf<HomePage>().FirstOrDefault();

        // GET: umbraco/api/Content/GetNavbar
        public Navbar GetNavbar()
        {
            var companyName = Home?.CompanyName;

            var navLinks = Home?.Descendants<CategoryPage>()
                .Where(p => p.VisibleInNavbar.Equals(true))
                .Select(c => new NavLink(c.Name, c.Url()));

            return new Navbar(companyName, navLinks); ;
        }
    }
}
