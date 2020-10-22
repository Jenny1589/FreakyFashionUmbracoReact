import React, { Component } from 'react';
import { services } from '../../../package.json';
import '../../../node_modules/material-icons/iconfont/material-icons.css';

class Navbar extends Component {
    state = { 
        serviceUrl: services.contentAPI + "navigation/getnavbar",
        brand: "",
        links: []
    }
    
    async componentDidMount() {
        fetch(this.state.serviceUrl, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                brand: json.Brand,
                links: json.NavLinks
            });
        });
    }

    getBrand() {
        return this.state.brand.toUpperCase();
    }

    getLinks() {
        return this.state.links.map((l, index) => 
                    <span key={ index } className="nav-item">
                        <a href={ l.Url } className="nav-link">{l.Text}</a>
                    </span>);
    }

    render() { 
        return ( 
            <nav className="navbar navbar-light navbar-expand-lg bg-transparent">
                <a className="navbar-brand" href="/">{ this.getBrand() }</a>
                <div className="d-flex justify-content-between ml-auto w-50">
                    <span className="navbar-nav pl-3">
                        { this.getLinks() }
                    </span>
                    <span className="d-flex align-items-center">
                        <span className="material-icons">
                            search
                        </span>
                        <input type="text" placeholder="Search..." />
                    </span>
                    <span className="navbar-nav">
                        <span className="nav-item">
                            <a href="#" className="nav-link">
                                <div className="position-relative">
                                    <span className="counter">
                                        2
                                    </span>
                                    <span className="material-icons">
                                        favorite
                                    </span>
                                </div>
                            </a>
                        </span>
                        <span className="nav-item">
                            <a href="#" className="nav-link">
                                <div className="position-relative">
                                    <span className="counter">
                                        2
                                    </span>
                                    <span className="material-icons">
                                        shopping_cart
                                    </span>
                                </div>
                            </a>
                        </span>
                    </span>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;