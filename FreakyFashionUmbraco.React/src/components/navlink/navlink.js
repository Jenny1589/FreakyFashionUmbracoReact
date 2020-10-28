import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    return (<span className="nav-item" onClick={() => props.onClick(props.url)}>
                <Link to={ props.url } className="nav-link">
                    { props.children }
                </Link>
            </span>);
}
 
export default NavLink;