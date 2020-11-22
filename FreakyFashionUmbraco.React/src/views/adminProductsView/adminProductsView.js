import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminProductForm from '../../components/adminProductForm/adminProductForm';
import AdminProductList from '../../components/adminProductList/adminProductList';

const AdminProductsView = () => {    

    const {path, url} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path} component={AdminProductList} />
            <Route path={`${url}/new`} component={AdminProductForm} />
            <Route path={`${url}/edit`} component={AdminProductForm} />
        </Switch>   
    );
}
 
export default AdminProductsView;