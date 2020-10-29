import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';

const CategoryView = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getcategory?route=' + props.location.pathname;
    const [category, isLoading] = getContent(url);

    function renderProducts(){
        return category.products.map((p, i) => 
            <div style={{width: 200}}>
                <Link to={ p.url }>
                    <img className="img-fluid" key={i} src={ services.ApiUrl + p.imageUrls[0] } alt={ p.description } />
                </Link>
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
 
export default CategoryView;