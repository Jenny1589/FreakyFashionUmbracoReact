import React from 'react';
import ProductCard from '../productCard/productCard';

const ProductGrid = (props) => {
   
    function renderProducts(){
        return props.products.map((p, i) => 
            <span key={ i } className="w-25 p-3">
                <ProductCard product={ p } /> 
            </span>
        );
    }

    return (  
        <div className="container">
            <div className="d-flex flex-wrap">
                { renderProducts() }
            </div>
        </div>
    );
}
 
export default ProductGrid;