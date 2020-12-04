using System.Linq;
using Umbraco.Web.WebApi;
using Umbraco.Web;
using FreakyFashionUmbraco.API.Models;
using Umbraco.Web.PublishedModels;
using System.Collections.Generic;
using System.Web.Http;
using System.Web;
using System;
using Umbraco.Core;
using System.IO;
using Umbraco.Core.Models;
using System.Collections.Specialized;

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

        public Product GetProduct(Guid key)
        {
            var productPage = new ProductPage(Umbraco.Content(key));
            return Mapper.Map<Product>(productPage);
        }

        private IEnumerable<Product> GetProducts(Func<ProductPage, bool> filter)
        {
            return Home.Descendants<ProductPage>()
                    .Where(p => filter(p))
                    .Select(p => Mapper.Map<Product>(p));
        }

        public bool ProductIsOnSale(ProductPage product) => product.RecommendedPrice > product.Price;

        public Category GetCategory(string route)
        {
            var categoryPage = new CategoryPage(UmbracoContext.Content.GetByRoute(route));
            var category = Mapper.Map<Category>(categoryPage);

            category.Products = category.IsSaleCategory ? 
                GetProducts(ProductIsOnSale) : 
                GetProducts(category.PruductIsInThisCategory);

            return category;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return Home.Descendants<CategoryPage>()
                .Select(c =>
                {
                    var category = Mapper.Map<Category>(c);
                    var productCount = category.IsSaleCategory ? 
                        GetProducts(ProductIsOnSale).Count() : 
                        GetProducts(category.PruductIsInThisCategory).Count();

                    category.ProductCount = $"{productCount} st";

                    return category;
                });
        }
        
        public IEnumerable<Product> GetRecommendedProducts(string excludeArtNr)
        {
            return Home.Descendants<ProductPage>()
                .Where(p => p.ArticleNumber != excludeArtNr)
                .Take(4)
                .Select(p => Mapper.Map<Product>(p));
        }

        public IEnumerable<Product> GetPopularProducts()
        {
            return Home.Descendants<ProductPage>()
                    .Take(8)
                    .Select(p => Mapper.Map<Product>(p));        
        }

        public IEnumerable<Product> GetProducts(string query)
        {
            query = query.ToUpper();

            return Home.Descendants<ProductPage>()
                .Where(p => p.Name.ToUpper().Contains(query) ||
                    p.ProductDescription.ToUpper().Contains(query) ||
                    p.Categories.Any(c => c.Name.ToUpper().Contains(query)))
                .Select(p => Mapper.Map<Product>(p));
        }

        public IEnumerable<Models.FooterElement> GetFooter()
        {
            return Home.FooterContent.Select(e => Mapper.Map<Models.FooterElement>(e));
        }

        public IHttpActionResult PostCategory()
        {
            var data = HttpContext.Current.Request.Form;

            var categoryArea = Home.FirstChild<CategoryArea>();
            var content = Services.ContentService.Create(data["name"], categoryArea.Key, CategoryPage.ModelTypeAlias, 1);

            var imageUdi = GetImageUdis(HttpContext.Current.Request.Files);

            content.SetValue(CategoryPage.GetModelPropertyType(c => c.HeroImage).Alias, imageUdi);
            content.SetValue(CategoryPage.GetModelPropertyType(c => c.VisibleInNavbar).Alias, data["visibleInNavbar"]);

            return SaveAndPublishContent(content);
        }

        public IHttpActionResult PostProduct()
        {
            var data = HttpContext.Current.Request.Form;
            var productArea = Home.FirstChild<ProductArea>();
            var newProduct = Services.ContentService.Create(data["name"], productArea.Key, ProductPage.ModelTypeAlias, 1);

            SetProductValues(newProduct, data, HttpContext.Current.Request.Files);

            return SaveAndPublishContent(newProduct);
        }        

        public IHttpActionResult DeleteContent(Guid key)
        {
            var content = Services.ContentService.GetById(key);
            if (content == null) return NotFound();

            var result = Services.ContentService.Delete(content);

            if (result.Success) return Ok(content);

            return BadRequest();
        }

        [HttpPut]
        public IHttpActionResult UpdateProduct(Guid key)
        {
            
            var data = HttpContext.Current.Request.Form;
            var product = Services.ContentService.GetById(key);

            if (product == null) return NotFound();

            product.Name = data["name"];

            SetProductValues(product, data, HttpContext.Current.Request.Files);

            return SaveAndPublishContent(product);
        }

        private void SetProductValues(IContent product, NameValueCollection data, HttpFileCollection images)
        {
            var categoryInput = data["categories"].Split(',');
            var categuryUdis = GetCategoryUdis(categoryInput);

            var imageUdis = GetImageUdis(images);

            product.SetValue(ProductPage.GetModelPropertyType(p => p.ArticleNumber).Alias, data["articleNumber"]);
            product.SetValue(ProductPage.GetModelPropertyType(p => p.ProductDescription).Alias, data["description"]);
            product.SetValue(ProductPage.GetModelPropertyType(p => p.Price).Alias, data["price"]);
            product.SetValue(ProductPage.GetModelPropertyType(p => p.RecommendedPrice).Alias, data["recommendedPrice"]);
            product.SetValue(ProductPage.GetModelPropertyType(p => p.Categories).Alias, categuryUdis);

            if(imageUdis != null) {
                product.SetValue(ProductPage.GetModelPropertyType(p => p.ProductImages).Alias, imageUdis);
            }
        }

        private IHttpActionResult SaveAndPublishContent(IContent content)
        {
            var result = Services.ContentService.SaveAndPublish(content);

            if (result.Success) return Ok(content.Key);

            return InternalServerError();
        }

        private string GetCategoryUdis(IEnumerable<string> categoryInput)
        {
            categoryInput = categoryInput.Select(i => i.ToUpper());

            return string.Join(",", Home.Descendants<CategoryPage>()
                    .Where(c => categoryInput.Contains(c.Name.ToUpper()))
                    .Select(c => Udi.Create(Constants.UdiEntityType.Document, c.Key).ToString()));
        }

        private string GetImageUdis(HttpFileCollection images)
        {
            if (string.IsNullOrWhiteSpace(images[0].FileName))
            {
                return null;
            }

            var udis = new List<string>();
            var index = 0;            

            foreach(var file in images)
            {
                var img = images[index];

                using(Stream s = img.InputStream)
                {
                    var media = Services.MediaService.CreateMedia(img.FileName, Constants.System.Root, Constants.Conventions.MediaTypes.Image, 1);
                    media.SetValue(Services.ContentTypeBaseServices, Constants.Conventions.Media.File, img.FileName, s);
                    Services.MediaService.Save(media);

                    udis.Add(Udi.Create(Constants.UdiEntityType.Media, media.Key).ToString());
                }

                index++;
            }

            return string.Join(",", udis);
        }
    }
}
