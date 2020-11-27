import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {services} from '../../../package.json';
import getContent from '../../hooks/getContent';

const AdminProductForm = () => {   
    const {productId} = useParams();
    const getCategoriesUrl = services.ApiUrl + services.contentRoute + 'getallcategories';
    const getProductUrl = services.ApiUrl + services.contentRoute + 'getproduct?key=' + productId;
    const postUrl = services.ApiUrl + services.contentRoute + 'postproduct'; 
    
    const [message, setMessage] = useState('');
    const [categories, categoriesIsLoading] = getContent(getCategoriesUrl);
    const [product, productIsLoading] = productId === undefined ? [{categories: []}, false] : getContent(getProductUrl);

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

    function renderMessage(){
        if(message !== '') return (
            <div className="mb-3">
                <small>{message}</small>
            </div>            
        );
    }

    function renderCategorySelections() {
        return ( categoriesIsLoading || productIsLoading ? <div>Loading...</div> :
            categories.map((c, i) => (
                <div key={i}>
                    <input id={`${c.name}Selector`} type="checkbox" className="mr-1" value={c.name} checked={product.categories.includes(c.name)}/>
                    <label htmlFor={`${c.name}Selector`}>{c.name}</label> 
                </div>
            ))
        );
    }

    const categorySelectionStyle = {
        border: '1px solid rgb(210, 15, 75)',
        borderRadius: 15,
        width: 50 + '%',
        height: 300,
        padding: '0px 16px 0px 16px',
        margin: '0px 0px 0px 16px',
        overflowY: 'scroll',
        overflowX: 'hidden'
    }

    return (
        <React.Fragment>
            <h1>Product form</h1>
            {renderMessage()}
            <form name="productForm" className="d-flex flex-column" onSubmit={handleSubmit}>
                <div className="d-flex align-items-center">
                    <fieldset className="d-flex flex-column p-4 w-50">
                        <label htmlFor="articleNumberInput">Article number</label>
                        <input id="articleNumberInput" name="articleNumber" type="text" value={product.articleNumber} />

                        <label htmlFor="productNameInput">Product name</label>
                        <input id="productNameInput" name="name" type="text" value={product.name} />

                        <label htmlFor="productDescriptionInput">Description</label>
                        <textarea id="productDescriptionInput" name="description" rows="5" value={product.description} />

                        <label htmlFor="productImagesInput">Upload images</label>
                        <input id="productImagesInput" name="images" type="file" accept="image/*" multiple />

                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column w-50 mr-4">
                                <label htmlFor="recommendedPriceInput">Recommended price</label>
                                <input id="recommendedPriceInput" name="recommendedPrice" type="number" step="0.05" value={product.recommendedPrice} />
                            </div>
                            
                            <div className="d-flex flex-column w-50">
                                <label htmlFor="productPriceInput">Price</label>
                                <input id="productPriceInput" name="price" type="number" step="0.05" value={product.price} />
                            </div>                    
                        </div> 
                    </fieldset>

                    <fieldset style={categorySelectionStyle}>
                        <legend>Categories</legend>
                        <div className="d-flex flex-column">
                            {renderCategorySelections()}
                        </div> 
                    </fieldset>              
                </div>      

                <input className="btn btn-primary align-self-end mt-4" type="submit" value="Save" />
            </form>
        </React.Fragment>        
     );
}
 
export default AdminProductForm;