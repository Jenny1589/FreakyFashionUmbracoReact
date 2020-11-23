import React, { Component } from 'react';
import NavLink from '../navLink/navLink';
import Icon from '../icon/icon';
import { services } from '../../../package.json';
import SearchForm from '../searchForm/searchForm';
import getContent from '../../hooks/getContent';

const Navbar = () => {
    const apiUrl = services.ApiUrl + services.contentRoute + "getnavbar";
    const [navbar, isLoading] = getContent(apiUrl);

    function getBrand() {
        return navbar.brand.toUpperCase();
    }

    function getLinks() {
        console.log(navbar);
        return navbar.navLinks.map((l, index) =>
            <NavLink key={ index } url={ l.url }>
                { l.text }
            </NavLink>
        );
    } 

    const handleSearch = (event) => {
        event.preventDefault();
        const searchInput = event.target[0];
        const name = searchInput.name;
        const query = searchInput.value;
        const action = `/search?${name}=${query}`;

        console.log(action);

        window.location.href = action;
    }

    return (isLoading ? <div>Loading...</div> :
        <nav className="navbar navbar-light navbar-expand-lg bg-light shadow">
            <a className="navbar-brand" href="/">
                {getBrand()}
            </a>
            <div className="d-flex justify-content-between ml-auto w-50">
                <span className="navbar-nav pl-3">
                    {getLinks()}
                </span>

                <SearchForm onSearch={handleSearch} />
                
                <span className="navbar-nav">
                    <NavLink url='/'>
                        <div className="position-relative">
                            <span className="counter">
                                2
                            </span>
                            <Icon iconName="favorite" />
                        </div>
                    </NavLink>
                    <NavLink url='/'>
                        <div className="position-relative">
                            <span className="counter">
                                2
                            </span>
                            <Icon iconName="shopping_cart" />
                        </div>
                    </NavLink>
                </span>
            </div>
        </nav>
    );
    
}
 
export default Navbar;