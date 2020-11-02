import React from 'react';
import {services} from '../../../package.json';
import getContent from '../../hooks/getContent';
import ProductGrid from '../productGrid/productGrid';
import PageHeader from '../pageHeader/pageHeader';

const RecommendedProducts = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getrecommendedproducts?excludeartnr=' + props.excludeartnr;
    const [products, isLoading] = getContent(url);

    return ( isLoading ? <div>Loading...</div> : 
        <div>            
            <PageHeader text="Recommended for you" bgText="Recommended" />
            <ProductGrid products={ products } />            
        </div>
    );
}
 
export default RecommendedProducts;