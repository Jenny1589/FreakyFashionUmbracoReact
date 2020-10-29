import React, { useState, useEffect } from 'react';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';

const Category = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getcategory?route=' + props.location.pathname;
    const [category, isLoading] = getContent(url);

    function renderProducts(){
        return category.products.map((p, i) => 
            <div style={{width: 200}}>
                <img className="img-fluid" key={i} src={ services.ApiUrl + p.imageUrls[0] } alt={ p.description } />
            </div>
        );
    }

    return ( isLoading ? <div>Loading...</div> : 
        <div className="mt-5">
            <h1>{ category.name }</h1>
            { renderProducts() }
        </div>
    );
}
 
export default Category;