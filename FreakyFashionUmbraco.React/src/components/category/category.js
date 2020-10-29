import React, { useState, useEffect } from 'react';
import { services } from '../../../package.json';



const Category = (props) => {
    const [category, setCategory] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getCategory(route){
            let url = services.ApiUrl + services.contentRoute + 'getcategory?route=' + route;
        
            const response = await fetch(url, { method: 'GET' })
            .then(response => response.json());

            setCategory(response);
            setIsLoading(false);
        }

        getCategory(props.location.pathname);
        console.log(category);
    }, [props.location.pathname]);

    return ( isLoading ? <div>Loading...</div> : 
        <h1>{ category.name }</h1>  );
}
 
export default Category;