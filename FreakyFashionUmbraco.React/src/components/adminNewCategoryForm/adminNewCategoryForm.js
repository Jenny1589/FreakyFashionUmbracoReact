import React from 'react';
import CategoryForm from '../categoryForm/categoryForm';
import {services} from '../../../package.json';

const AdminNewCategoryForm = () => {
    const postUrl = services.ApiUrl + services.contentRoute + 'postcategory';

    const handleSubmit = (event) => {
        event.preventDefault();
        const formEl = event.target;
        const data = new FormData(formEl);

        const isVisibleInNavbar = formEl.querySelector('#visibleInNavbarSelector').checked ? '1' : '0';
        data.set('visibleInNavbar', isVisibleInNavbar);

        fetch(postUrl, {
            method: 'POST',
            body: data
        })
        .then(res =>{ console.log(res); window.location = `../categories`;});
    }

    return (
        <React.Fragment>
            <h1>New category</h1>
            <CategoryForm onSubmit={handleSubmit} />  
        </React.Fragment>        
     );
}
 
export default AdminNewCategoryForm;