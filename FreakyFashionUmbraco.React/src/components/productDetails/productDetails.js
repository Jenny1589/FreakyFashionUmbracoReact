import React from 'react';
import ImageDisplay from '../imageDisplay/imageDisplay';

const ProductDetails = (props) => {
    const {product} = props;

    const renderCategories = product.categories.join(', ');

    return ( 
        <div className="container p-4">
                <div className="row">
                    <div className="col-6">
                        <ImageDisplay imageUrls={ product.imageUrls } />
                    </div>
                    <div className="col-6">
                        <div className="bg-white p-4 h-100">
                            <div className="mb-2">
                                <span  className="mr-2">Art. nr:</span>
                                <span>{ product.articleNumber }</span>
                            </div> 
                            <h4>Details</h4>
                            <p>{ product.description }</p>

                            <h6>Categories</h6>
                            {renderCategories}                           
                            <div className="mt-5">
                                <span className="display-4">{ product.price + ' kr'}</span>
                            </div>
                            {props.children}
                        </div>                        
                    </div>
                </div>
            </div>
     );
}
 
export default ProductDetails;