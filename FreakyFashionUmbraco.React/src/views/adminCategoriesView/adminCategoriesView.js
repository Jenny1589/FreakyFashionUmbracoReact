import React from 'react';
import AdminCategoryList from '../../components/adminCategoryList/adminCategoryList';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminCategoryForm from '../../components/adminCategoryForm/adminCategoryForm';

const AdminCategoriesView = () => { 

    const {path, url} = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={AdminCategoryList} />
            <Route path={`${url}/new`} component={AdminCategoryForm} />
            <Route path={`${url}/edit`} component={AdminCategoryForm} />
        </Switch>
    );
}
 
export default AdminCategoriesView;