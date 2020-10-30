import React from 'react';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import PageHeader from '../../components/pageHeader/pageHeader';
import ProductCard from '../../components/productCard/productCard';

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
        <div className="container mt-5">
            <PageHeader text={ category.name } />

            <div className="d-flex flex-wrap">
                { renderProducts() }
            </div>
        </div>
    );
}
 
export default CategoryView;