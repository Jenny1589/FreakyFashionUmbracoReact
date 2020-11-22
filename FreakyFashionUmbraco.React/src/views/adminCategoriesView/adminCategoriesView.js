import React from 'react';
import Table from '../../components/table/table';
import { Link, useRouteMatch } from 'react-router-dom';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';

const AdminCategoriesView = () => {
    function Category(name, productCount){
        this.name = name;
        this.productCount = productCount;
    }   

    const {url} = useRouteMatch();
    const apiUrl = services.ApiUrl + services.contentRoute + 'getallcategories';
    const [categories, isLoading] = getContent(apiUrl);

    function getCategories(){
        return isLoading ? [new Category('', '')] : categories.map(c => new Category(c.name, c.productCount));
    }

    return ( 
        <React.Fragment>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Categories</h1>
                <Link to={`${url}/new`} className="btn btn-primary ml-auto">
                    New category
                </Link>
            </div>
            <Table items={getCategories()} />
        </React.Fragment>        
     );
}
 
export default AdminCategoriesView;