using System.Linq;
using Umbraco.Web.WebApi;
using Umbraco.Web;
using FreakyFashionUmbraco.API.Models;
using Umbraco.Web.PublishedModels;
using Umbraco.Core.Composing;

namespace FreakyFashionUmbraco.API.Controllers
{
    public class ContentController : UmbracoApiController
    {
        private Umbraco.Web.PublishedModels.HomePage Home => Umbraco.ContentAtRoot()
            .DescendantsOrSelf<Umbraco.Web.PublishedModels.HomePage>().FirstOrDefault();

        // GET: umbraco/api/Content/GetNavbar
        public Navbar GetNavbar()
        {
            var companyName = Home?.CompanyName;

            var navLinks = Home?.Descendants<CategoryPage>()
                .Where(p => p.VisibleInNavbar.Equals(true))
                .Select(c => new NavLink(c.Name, c.Url()));

            return new Navbar(companyName, navLinks);
        }

        public Models.HomePage GetHomePage()
        {
            return Mapper.Map<Models.HomePage>(Home);
        }

        public Product GetProduct(string route)
        {
            var productPage = new ProductPage(UmbracoContext.Content.GetByRoute(route));
            return Mapper.Map<Product>(productPage);        
        }

        public Category GetCategory(string route)
        {
            var categoryPage = new CategoryPage(UmbracoContext.Content.GetByRoute(route));
            var category = Current.Mapper.Map<Category>(categoryPage);

            category.IncludeProducts(Umbraco, Mapper);

            return category;
        }
    }
}
