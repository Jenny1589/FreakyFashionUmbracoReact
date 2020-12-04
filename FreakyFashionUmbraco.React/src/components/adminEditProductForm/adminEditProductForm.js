import React from 'react';
import {useParams} from 'react-router-dom';
import {services} from '../../../package.json';
import getContent from '../../hooks/getContent';
import ProductForm from '../productForm/productForm';

const AdminEditProductForm = () => {       
    const {productId} = useParams();
    const getProductUrl = services.ApiUrl + services.contentRoute + 'getproduct?key=' + productId;
    const updateUrl = services.ApiUrl + services.contentRoute + 'updateproduct?key=' + productId;
    const [product, isLoading] = getContent(getProductUrl);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formEl = event.target;
        const data = new FormData(formEl);
        
        data.set('categories', [...formEl.querySelectorAll('input[type="checkbox"]')]
            .reduce((acc, el) => {
                if(el.checked){
                    acc.push(el.value);
                } 
                return acc;
            }, []).join(',')
        );
        
        fetch(updateUrl, {
            method: 'PUT',
            body: data
        })
        .then(res => res.json())
        .then(json => window.location = `../${json}`);
    }

    return (isLoading ? <div>Loading...</div> :
        <React.Fragment>
            <h1>Edit product</h1>
            <ProductForm product={product} onSubmit={handleSubmit} />
        </React.Fragment>        
    );
}
 
export default AdminEditProductForm;