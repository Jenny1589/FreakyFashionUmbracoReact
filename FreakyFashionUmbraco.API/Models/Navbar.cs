using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreakyFashionUmbraco.API.Models
{
    public class Navbar
    {
        public Navbar(string brand, IEnumerable<NavLink> navLinks)
        {
            Brand = brand;
            NavLinks = navLinks;
        }

        public string Brand { get; }
        public IEnumerable<NavLink> NavLinks { get; }        
    }
}