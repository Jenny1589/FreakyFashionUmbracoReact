using System.Collections.Generic;

namespace FreakyFashionUmbraco.API.Models
{
    public class HomePage
    {
        public string CompanyName { get; set; }
        public string CompanySlogan { get; set; }
        public string HeroImageUrl { get; set; }
        
        public string TrendingHeader { get; set; }
        public string TrendingHeaderBgText { get; set; }
        public IEnumerable<Product> TrendingProducts { get; set; }

        public string LinksHeader { get; set; }
        public string LinksHeaderBgText { get; set; }
        public IEnumerable<Category> CategoryLinks { get; set; }

        public string CampaignHeader { get; set; }
        public string CampaignHeaderBgText { get; set; }
        public string CampaignName { get; set; }
        public string CampaignImageUrl { get; set; }
    }
}