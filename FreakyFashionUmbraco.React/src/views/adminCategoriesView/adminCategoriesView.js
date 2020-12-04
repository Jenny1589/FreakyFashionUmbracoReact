import React from 'react';
import AdminCategoryList from '../../components/adminCategoryList/adminCategoryList';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminNewCategoryForm from '../../components/adminNewCategoryForm/adminNewCategoryForm';

const AdminCategoriesView = () => { 

    const {path, url} = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={AdminCategoryList} />
            <Route path={`${url}/new`} component={AdminNewCategoryForm} />
        </Switch>
    );
}
 
export default AdminCategoriesView;