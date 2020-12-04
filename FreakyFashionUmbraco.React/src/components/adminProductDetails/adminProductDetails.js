import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {services} from '../../../package.json';
import ProductDetails from '../productDetails/productDetails';
import getContent from '../../hooks/getContent';
import DialogYesOrNo from '../dialogYesOrNo/dialogYesOrNo';

const AdminProductDetails = () => {
    const {productId} = useParams();
    const apiUrl = services.ApiUrl + services.contentRoute + 'getProduct?key=' + productId;
    const [product, isLoading] = getContent(apiUrl);
    const [dialogIsVisible, setDialogIsVisible] = useState(false);

    const showDialog = () => setDialogIsVisible(true);

    const handleDialogYes = () => {
        const deleteUrl = services.ApiUrl + services.contentRoute + 'deletecontent?key=' + productId;

        async function deleteProduct(){
            const response = await fetch(deleteUrl, {
                method: 'DELETE'
            });

            window.location = response.status === 200 ? '../products?deleteMessage=ok' : '/';
        }

        deleteProduct();
    }

    const handleDialogNo = () => setDialogIsVisible(false);

    return (isLoading ? <div>Loading...</div> :
        <div>
            <h1>{product.name}</h1>
            <ProductDetails product={product}>
                <div className="mt-5">
                    <Link to={`./edit/${product.id}`} className="btn btn-outline-primary mr-2 w-25">
                        Edit
                    </Link>
                    <button type="button" className="btn btn-primary w-25" onClick={showDialog}>
                        Delete
                    </button>
                </div>
            </ProductDetails>
            <DialogYesOrNo isVisible={dialogIsVisible} onYes={handleDialogYes} onNo={handleDialogNo}>
                <p>Are you sure you want to delete this product?</p>
            </DialogYesOrNo>
        </div>        
    );
}
 
export default AdminProductDetails;