namespace FreakyFashionUmbraco.API.Models.Navigation
{
    public class NavLink
    {
        public NavLink(string text, string url)
        {
            Text = text;
            Url = url;
        }

        public string Text { get; }
        public string Url { get; }
    }
}