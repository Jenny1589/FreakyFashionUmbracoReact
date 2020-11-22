import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminProductsView from '../adminProductsView/adminProductsView';
import AdminCategoriesView from '../adminCategoriesView/adminCategoriesView';
import NavLink from '../../components/navLink/navLink';
import SideBar from '../../components/sideBar/sideBar';
import Icon from '../../components/icon/icon';
import './adminView.css';

const AdminView = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="container-fluid admin-view">
            <SideBar>
                <NavLink url={`${url}/products`}>
                    <Icon iconName="store" />
                    Products
                </NavLink>
                <NavLink url={`${url}/categories`}>
                    <Icon iconName="local_offer" />
                    Categories
                </NavLink>
            </SideBar>
            <div className="admin-area">
                <Switch>
                    <Route exact path={path}>
                        <Redirect to={`${url}/products`}/>
                    </Route>
                    <Route path={`${url}/products`} component={AdminProductsView} />
                    <Route path={`${url}/categories`} component={AdminCategoriesView} />
                </Switch>
            </div>            
        </div>        
    );
}
 
export default AdminView;