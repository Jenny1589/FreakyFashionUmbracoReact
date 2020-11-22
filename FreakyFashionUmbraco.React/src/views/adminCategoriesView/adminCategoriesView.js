import React from 'react';
import Table from '../../components/table/table';
import { Link, useRouteMatch } from 'react-router-dom';

const AdminCategoriesView = () => {
    function Category(){
        this.name = "";
        this.productCount = "";
    }

    const {url} = useRouteMatch();

    return ( 
        <React.Fragment>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Categories</h1>
                <Link to={`${url}/new`} className="btn btn-primary ml-auto">
                    New category
                </Link>
            </div>
            <Table items={[new Category()]} />
        </React.Fragment>        
     );
}
 
export default AdminCategoriesView;