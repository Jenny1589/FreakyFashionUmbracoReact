import React, {useState} from 'react';
import {services} from '../../../package.json';
import ProductForm from '../productForm/productForm';

const AdminNewProductForm = () => {
    const postUrl = services.ApiUrl + services.contentRoute + 'postproduct';

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
        
        fetch(postUrl, {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(json => window.location = `.?productId=${json}`);
    }

    return ( 
        <React.Fragment>
            <h1>New product</h1>
            <ProductForm onSubmit={handleSubmit} />            
        </React.Fragment>        
     );
}
 
export default AdminNewProductForm;