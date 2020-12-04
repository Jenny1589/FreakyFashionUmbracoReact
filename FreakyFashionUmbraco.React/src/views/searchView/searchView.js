import React from 'react';
import PageHeader from '../../components/pageHeader/pageHeader';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import ProductGrid from '../../components/productGrid/productGrid';

const SearchView = (props) => { 
    const search = props.location.search;
    const url = services.ApiUrl + services.contentRoute + 'getproducts' + search;
    const [products, isLoading] = getContent(url);
    
    function getQuery(){
        return search.split('=')[1].replace('%20', ' ');
    }

    function renderResult(){
        return products.length > 0 ? <ProductGrid products={ products } /> :
            <div className="d-flex justify-content-center">
                Nothing found. Please try again!
            </div>
    }

    return (  
        <div style={{minHeight: 100 + 'vh'}}> 
            <PageHeader text="Search result" bgText="Result" />
            <div className="d-flex justify-content-center">
                <p className="lead">
                    We found {products.length} results for "{getQuery()}"
                </p>
            </div>
            { isLoading ? <div>Loading...</div> :
                renderResult()
            }            
        </div>
    );
}
 
export default SearchView;