import React from 'react'; 
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';

const Product = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getproduct?route=' + props.location.pathname;
    const [product, isLoading] = getContent(url);

    return (isLoading ? <div>Loading...</div> : 
        <h1>{ product.name }</h1>
    );
}
 
export default Product;