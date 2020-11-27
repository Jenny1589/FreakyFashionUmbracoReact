import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminProductDetails from '../../components/adminProductDetails/adminProductDetails';
import AdminNewProductForm from '../../components/adminNewProductForm/adminNewProductForm';
import AdminProductList from '../../components/adminProductList/adminProductList';
import AdminEditProductForm from '../../components/adminEditProductForm/adminEditProductForm';

const AdminProductsView = () => {    

    const {path, url} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path} component={AdminProductList} />
            <Route path={`${url}/new`} component={AdminNewProductForm} />
            <Route path={`${url}/edit/:productId`} component={AdminEditProductForm} />
            <Route path={`${url}/:productId`} component={AdminProductDetails} />
        </Switch>   
    );
}
 
export default AdminProductsView;