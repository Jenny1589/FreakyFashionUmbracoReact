import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import SideBar from '../../components/sideBar/sideBar';
import Icon from '../../components/icon/icon';
import './adminView.css';

const AdminView = () => {
    let { url } = useRouteMatch();

    return (
        <div className="container-fluid">
            <SideBar>
                <NavLink to={`${url}/products`}>
                    <Icon iconName="store" />
                    Products
                </NavLink>
                <NavLink to={`${url}/categories`}>
                    <Icon iconName="local_offer" />
                    Categories
                </NavLink>
            </SideBar>
            <div className="admin-area">
                <h1>Admin area!</h1>
            </div>            
        </div>        
    );
}
 
export default AdminView;