import React from 'react';
import {services} from '../../../package.json';
import { Link } from 'react-router-dom';
import './productCard.css';

const ProductCard = (props) => {
    if(props.product === undefined || props.product === {}){
        throw '[ProductCard]: Must have a product to render! Product is empty or undefined.';
    } 

    console.log(props.product);

    return (  
        <div className="card">
            <Link to={ props.product.url } className="card-img-zoom">
                <img className="card-img-top" src={ services.ApiUrl + props.product.imageUrls[0] } alt="Card image cap" />
            </Link> 
            <div className="card-body">
                <Link to={ props.product.url } className="text-dark">
                    <h5 className="card-title">{ props.product.name }</h5>
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">{ props.product.price + ' kr' }</p>
                    <button type="button" className="btn btn-primary">Buy</button>
                </div>                
            </div>
        </div>
    );
}
 
export default ProductCard;