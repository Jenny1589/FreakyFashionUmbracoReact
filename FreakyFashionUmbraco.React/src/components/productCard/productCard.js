import React from 'react';
import {services} from '../../../package.json';
import { Link } from 'react-router-dom';
import './productCard.css';

const ProductCard = (props) => {
    if(props.product === undefined || props.product === {}){
        throw '[ProductCard]: Must have a product to render! Product is empty or undefined.';
    }

    const isOnSale = props.product.recommendedPrice > props.product.price;

    function getRecommendedPriceClasses(){
        let classes="mr-2 d-";
        classes +=  isOnSale ? 'inline' : 'none';

        return classes;
    }

    function renderDiscount(){
        if(isOnSale){
            const priceDiff = props.product.recommendedPrice - props.product.price;
            const discount = 0 - Math.round((priceDiff / props.product.recommendedPrice) * 100);
            return (
                <div className="discount-flag">
                    { discount + ' %'}
                </div>
            );
        }
    }

    return (  
        <div className="card shadow position-relative">
            <Link to={ props.product.url } className="card-img-zoom">
                { renderDiscount() }         
                <img className="card-img-top" src={ services.ApiUrl + props.product.imageUrls[0] } alt="" />
            </Link> 
            <div className="card-body">
                <Link to={ props.product.url } className="text-dark">
                    <h5 className="card-title">{ props.product.name }</h5>
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">
                        <span className={ getRecommendedPriceClasses() }>
                            <s>{ props.product.recommendedPrice + 'kr' }</s>
                        </span>
                        <span>{ props.product.price + ' kr' }</span>
                    </p>
                    <button type="button" className="btn btn-primary">Buy</button>
                </div>                
            </div>
        </div>
    );
}
 
export default ProductCard;