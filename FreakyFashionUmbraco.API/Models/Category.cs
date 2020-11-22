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
        public string ProductCount { get; set; }
        public bool IsSaleCategory { get; set; }
        public IEnumerable<Product> Products { get; set; }

        public bool PruductIsInThisCategory(ProductPage product) => product.Categories.Any(c => c.Name == Name);    
    }
}