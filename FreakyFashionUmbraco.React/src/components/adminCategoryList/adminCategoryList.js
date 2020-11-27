import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Table from '../table/table';
import getContent from '../../hooks/getContent';
import {services} from '../../../package.json';

const AdminCategoryList = () => {
    function Category(name, productCount){
        this.name = name;
        this.products = productCount;
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
 
export default AdminCategoryList;