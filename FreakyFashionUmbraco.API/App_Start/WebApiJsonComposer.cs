using System.Web.Http;
using System.Web.Http.Cors;
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace FreakyFashionUmbraco.API.App_Start
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    internal class WebApiJsonComposer : IComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components().Insert<WebApiJsonComponent>();
        }

        public class WebApiJsonComponent : IComponent
        {
            public void Initialize()
            {
                GlobalConfiguration.Configuration.Formatters.JsonFormatter
                    .SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            }

            public void Terminate()
            {
            }
        }
    }
}