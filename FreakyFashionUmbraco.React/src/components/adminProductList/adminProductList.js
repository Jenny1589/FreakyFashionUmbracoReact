import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchForm from '../../components/searchForm/searchForm';
import Table from '../../components/table/table';

const AdminProductList = () => {
    
    function Product() {
        this.articleNumber = "";
        this.productName = "";
        this.categories = "";
        this.price = "";
    }

    const {url} = useRouteMatch();

    return ( 
        <React.Fragment>
            <h1>Products</h1>
            <div className="d-flex justify-content-between">
                <SearchForm />
                <Link to={`${url}/new`} className="btn btn-primary ml-auto">
                    New product
                </Link>
            </div>
            
            <Table items={[new Product()]} />
        </React.Fragment>  
     );
}
 
export default AdminProductList;