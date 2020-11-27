import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {services} from '../../../package.json';
import ProductDetails from '../productDetails/productDetails';
import getContent from '../../hooks/getContent';

const AdminProductDetails = () => {
    const {productId} = useParams();
    const apiUrl = services.ApiUrl + services.contentRoute + 'getProduct?key=' + productId;
    const [product, isLoading] = getContent(apiUrl);

    return (isLoading ? <div>Loading...</div> :
        <React.Fragment>
            <h1>{product.name}</h1>
            <ProductDetails product={product}>
                <div className="mt-5">
                    <Link to={`./edit/${product.id}`} className="btn btn-outline-primary mr-2 w-25">
                        Edit
                    </Link>
                    <button type="button" className="btn btn-primary w-25">
                        Delete
                    </button>
                </div>
            </ProductDetails>
        </React.Fragment>        
    );
}
 
export default AdminProductDetails;