using System.Collections.Generic;

namespace FreakyFashionUmbraco.API.Models
{
    public class Product
    {
        public string Name { get; set; }
        public string ArticleNumber { get; set; }
        public decimal RecommendedPrice { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public IEnumerable<string> ImageUrls { get; set; }
        public string Url { get; set; }
    }
}