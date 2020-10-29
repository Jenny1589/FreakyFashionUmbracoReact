using FreakyFashionUmbraco.API.Models;
using System.Diagnostics;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Web.Http;
using System.Web.Http.Cors;
using Umbraco.Core;
using Umbraco.Core.Composing;
using Umbraco.Core.Mapping;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;

namespace FreakyFashionUmbraco.API.App_Start
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    internal class WebApiMappingComposer : IComposer
    {
        public void Compose(Composition composition)
        {
            composition.WithCollectionBuilder<MapDefinitionCollectionBuilder>()
                .Add<HomePageMapDefinition>();
        }

        public class HomePageMapDefinition : IMapDefinition
        {
            public void DefineMaps(UmbracoMapper mapper)
            {
                mapper.Define<ProductPage, Product>(
                    ctor: (source, context) => new Product(),
                    map: (source, target, context) =>
                    {
                        target.Name = string.IsNullOrWhiteSpace(source.ProductName) ? source.Name : source.ProductName;
                        target.ArticleNumber = source.ArticleNumber;
                        target.Description = source.ProductDescription;
                        target.Price = source.Price;
                        target.RecommendedPrice = source.RecommendedPrice;
                        target.ImageUrls = source.ProductImages.Select(i => i.Url());
                        target.Url = source.Url();
                    }
                );

                mapper.Define<CategoryPage, Category>(
                    ctor: (source, context) => new Category(),
                    map: (source, target, context) =>
                    {
                        target.Name = source.Name;
                        target.ImageUrl = source.HeroImage?.Url();
                        target.Url = source.Url();
                    }
                );

                mapper.Define<Umbraco.Web.PublishedModels.HomePage, Models.HomePage>(
                    ctor: (source, context) => new Models.HomePage(),
                    map: (source, target, context) =>
                    {
                        target.CompanyName = source.CompanyName;
                        target.CompanySlogan = source.CompanySlogan;
                        target.HeroImageUrl = source.HeroImage?.Url();

                        target.TrendingHeader = source.TrendingHeader;
                        target.TrendingHeaderBgText = string.IsNullOrWhiteSpace(source.TrendingHeaderBackground) ? source.TrendingHeader : source.TrendingHeaderBackground;
                        target.TrendingProducts = source.TrendingProducts.Select(p => mapper.Map<Product>(new ProductPage(p)));

                        target.LinksHeader = source.LinksHeader;
                        target.LinksHeaderBgText = string.IsNullOrWhiteSpace(source.LinksHeaderBackground) ? source.LinksHeader : source.LinksHeaderBackground;
                        target.CategoryLinks = source.CategoryLinks.Select(c => mapper.Map<Category>(new CategoryPage(c)));

                        target.CampaignHeader = source.CampaignHeader;
                        target.CampaignHeaderBgText = string.IsNullOrWhiteSpace(source.CampaignHeaderBackground) ? source.CampaignHeader : source.CampaignHeaderBackground;
                        target.CampaignName = source.CampaignTitle;
                        target.CampaignImageUrl = source.CampaignImage?.Url();
                    }
                );
            }
        }
    }
}