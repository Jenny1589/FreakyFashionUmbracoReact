using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Mapping;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;

namespace FreakyFashionUmbraco.API.Models
{
    public class Category
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Url { get; set; }
        public IEnumerable<Product> Products { get; set; }

        public void IncludeProducts(UmbracoHelper umbraco, UmbracoMapper mapper)
        {
            Products = umbraco.ContentAtRoot().DescendantsOrSelf<ProductPage>()
                .Where(p => p.Categories.Any(c => c.Name == Name))
                .Select(p => mapper.Map<Product>(p));
        }
    }
}