import React from 'react';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import PageHeader from '../../components/pageHeader/pageHeader';
import ProductCard from '../../components/productCard/productCard';
import Banner from '../../components/banner/banner';

const CategoryView = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getcategory?route=' + props.location.pathname;
    const [category, isLoading] = getContent(url);

    function renderProducts(){
        return category.products.map((p, i) => 
            <span key={ i } className="w-25 p-3">
                <ProductCard product={ p } /> 
            </span>
        );
    }

    return ( isLoading ? <div>Loading...</div> :        
        <div>
            <Banner imgUrl={ services.ApiUrl + category.imageUrl } />
            <PageHeader text={ category.name } />  
            <div className="container">
                <div className="d-flex flex-wrap">
                    { renderProducts() }
                </div>
            </div>
        </div>             
    );
}
 
export default CategoryView;