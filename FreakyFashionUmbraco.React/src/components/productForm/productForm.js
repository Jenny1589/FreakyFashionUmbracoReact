import React from 'react';
import {services} from '../../../package.json';
import getContent from '../../hooks/getContent';
import './productForm.css';

const ProductForm = (props) => {    
    const getCategoriesUrl = services.ApiUrl + services.contentRoute + 'getallcategories';    
    const [categories, categoriesIsLoading] = getContent(getCategoriesUrl);

    const {product} = props;

    function renderCategorySelections() {
        return categoriesIsLoading ? <div>Loading...</div> : categories.map((c, i) => {
            const isChecked = product !== undefined && product.categories.includes(c.name);

            return (
                <div key={i}>
                    <input id={`${c.name}Selector`} 
                        type="checkbox" 
                        className="mr-1" 
                        value={c.name}
                        defaultChecked={isChecked} />
                    <label htmlFor={`${c.name}Selector`}>{c.name}</label> 
                </div>
            )        
        });
    }

    return ( 
        <form name="productForm" className="d-flex flex-column" onSubmit={props.onSubmit}>
            <div className="d-flex align-items-center">
                <fieldset className="d-flex flex-column p-4 w-50">
                    <label htmlFor="articleNumberInput">Article number</label>
                    <input id="articleNumberInput" 
                        name="articleNumber" 
                        type="text" 
                        defaultValue={product === undefined ? '' : product.articleNumber} />

                    <label htmlFor="productNameInput">Product name</label>
                    <input id="productNameInput" 
                        name="name" 
                        type="text" 
                        defaultValue={product === undefined ? '' : product.name} />

                    <label htmlFor="productDescriptionInput">Description</label>
                    <textarea id="productDescriptionInput" 
                        name="description" 
                        rows="5" 
                        defaultValue={product === undefined ? '' : product.description} />

                    <label htmlFor="productImagesInput">Upload images</label>
                    <input id="productImagesInput" 
                        name="images" 
                        type="file" 
                        accept="image/*" 
                        multiple />

                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column w-50 mr-4">
                            <label htmlFor="recommendedPriceInput">Recommended price</label>
                            <input id="recommendedPriceInput" 
                            name="recommendedPrice" 
                            type="number" 
                            step="0.01" 
                            defaultValue={product === undefined ? '' : product.recommendedPrice} />
                        </div>
                        
                        <div className="d-flex flex-column w-50">
                            <label htmlFor="productPriceInput">Price</label>
                            <input id="productPriceInput" 
                            name="price" 
                            type="number" 
                            step="0.01" 
                            defaultValue={product === undefined ? '' : product.price} />
                        </div>                    
                    </div> 
                </fieldset>

                <fieldset className="category-selection">
                    <legend>Categories</legend>
                    <div className="d-flex flex-column">
                        {renderCategorySelections()}
                    </div> 
                </fieldset>              
            </div>      

            <input className="btn btn-primary align-self-end mt-4" type="submit" value="Save" />
        </form>
     );
}
 
export default ProductForm;