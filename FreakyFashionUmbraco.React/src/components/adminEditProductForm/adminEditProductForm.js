import React from 'react';
import {useParams} from 'react-router-dom';
import {services} from '../../../package.json';
import getContent from '../../hooks/getContent';
import ProductForm from '../productForm/productForm';

const AdminEditProductForm = () => {       
    const {productId} = useParams();
    const getProductUrl = services.ApiUrl + services.contentRoute + 'getproduct?key=' + productId;
    const [product, isLoading] = getContent(getProductUrl);

    const handleSubmit = () => {

    }

    return (isLoading ? <div>Loading...</div> :
        <React.Fragment>
            <h1>Edit product</h1>
            <ProductForm product={product} onSubmit={handleSubmit} />
        </React.Fragment>        
    );
}
 
export default AdminEditProductForm;