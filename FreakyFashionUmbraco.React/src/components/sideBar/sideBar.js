import React from 'react';
import './sideBar.css';

const SideBar = (props) => {
    return ( 
        <div className="sidebar bg-dark">
            { props.children }
        </div>
     );
}
 
export default SideBar;