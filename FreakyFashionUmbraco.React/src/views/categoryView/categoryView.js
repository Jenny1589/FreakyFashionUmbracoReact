import React from 'react';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import PageHeader from '../../components/pageHeader/pageHeader';
import Banner from '../../components/banner/banner';
import ProductGrid from '../../components/productGrid/productGrid';

const CategoryView = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getcategory?route=' + props.location.pathname;
    const [category, isLoading] = getContent(url);


    return ( isLoading ? <div>Loading...</div> :        
        <div>
            <Banner imgUrl={ services.ApiUrl + category.imageUrl } />
            <PageHeader text={ category.name } />  
            <ProductGrid products={ category.products } />
        </div>             
    );
}
 
export default CategoryView;