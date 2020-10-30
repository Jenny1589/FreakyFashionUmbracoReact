using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
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
        public bool IsSaleCategory { get; set; }
        public IEnumerable<Product> Products { get; set; }

        public void IncludeProducts(UmbracoHelper umbraco, UmbracoMapper mapper)
        {
            Products = IsSaleCategory ? GetProducts(umbraco, mapper, ProductIsOnSale) : GetProducts(umbraco, mapper, PruductIsInThisCategory);    
        }

        private IEnumerable<Product> GetProducts(UmbracoHelper umbraco, UmbracoMapper mapper, Func<ProductPage, bool> filter)
        {
            return umbraco.ContentAtRoot().DescendantsOrSelf<ProductPage>()
                   .Where(p => filter(p))
                   .Select(p => mapper.Map<Product>(p));
        }

        private bool ProductIsOnSale(ProductPage product) => product.RecommendedPrice > product.Price;

        private bool PruductIsInThisCategory(ProductPage product) => product.Categories.Any(c => c.Name == Name);
    
    }
}