import React from 'react';

const NavLink = (props) => {
    return (<span className="nav-item">
                <a href={ props.url } className="nav-link">
                    { props.children }
                </a>
            </span>);
}
 
export default NavLink;