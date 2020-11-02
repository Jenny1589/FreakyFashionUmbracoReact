import React from 'react';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import PageHeader from '../pageHeader/pageHeader';
import ProductGrid from '../productGrid/productGrid';

const PopularProducts = () => {
    const url = services.ApiUrl + services.contentRoute + 'getpopularproducts';
    const [products, isLoading] = getContent(url);

    return ( isLoading ? <div>Loading...</div> :
        <div className="mb-5">
            <PageHeader text="Popular products" bgText="Products" />
            <ProductGrid products={ products } />
        </div>  
    );
}
 
export default PopularProducts;