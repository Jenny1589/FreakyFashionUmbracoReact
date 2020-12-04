import React from 'react';

const AdminCategoryForm = (props) => {
    return (
        <form name="categoryForm" className="d-flex flex-column w-50" onSubmit={props.onSubmit}>
            <label htmlFor="categoryNameInput">Category name</label>
            <input id="categoryNameInput" 
                name="name" 
                type="text" />            
            
            <div>
                <input id="visibleInNavbarSelector"
                    name="visibleInNavbar" 
                    type="checkbox" 
                    className="mr-1" />
                <label htmlFor="visibleInNavbarSelector">Show in navbar</label>
            </div>             

            <label htmlFor="categoryImageInput">Upload images</label>
            <input id="categoryImageInput" 
                name="image" 
                type="file" 
                accept="image/*" />
            
            <input className="btn btn-primary align-self-end mt-4" type="submit" value="Save" />            
        </form>
     );
}
 
export default AdminCategoryForm;