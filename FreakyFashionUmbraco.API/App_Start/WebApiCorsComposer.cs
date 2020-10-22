using System.Web.Http;
using System.Web.Http.Cors;
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace FreakyFashionUmbraco.API.App_Start
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    internal class WebApiCorsComposer : IComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components().Insert<WebApiCorsComponent>();
        }

        public class WebApiCorsComponent : IComponent
        {
            public void Initialize()
            {
                var cors = new EnableCorsAttribute(origins: "*",
                   headers: "Origin, X-Requested-With, Accept, Authorization, Content-Type",
                   methods: "GET, POST, PUT, DELETE, OPTIONS");

                GlobalConfiguration.Configuration.EnableCors(cors);
            }

            public void Terminate()
            {
            }
        }
    }
}