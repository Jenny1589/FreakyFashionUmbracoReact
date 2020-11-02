import React, { Component } from 'react';
import NavLink from '../navLink/navLink';
import Icon from '../icon/icon';
import { services } from '../../../package.json';
import SearchForm from '../searchForm/searchForm';

class Navbar extends Component {
    state = { 
        serviceUrl: services.ApiUrl + services.contentRoute + "getnavbar",
        brand: "",
        links: []
    }
    
    async componentDidMount() {
        fetch(this.state.serviceUrl, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                brand: json.brand,
                links: json.navLinks
            });
        });
    }

    getBrand() {
        return this.state.brand.toUpperCase();
    }

    getLinks() {
        return this.state.links.map((l, index) =>
            <NavLink key={ index } url={ l.url }>
                { l.text }
            </NavLink>
        );
    } 

    render() { 
        return ( 
            <nav className="navbar navbar-light navbar-expand-lg bg-light shadow">
                <a className="navbar-brand" href="/">
                    { this.getBrand() }
                </a>
                <div className="d-flex justify-content-between ml-auto w-50">
                    <span className="navbar-nav pl-3">
                        { this.getLinks() }
                    </span>

                    <SearchForm />
                    
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
}
 
export default Navbar;