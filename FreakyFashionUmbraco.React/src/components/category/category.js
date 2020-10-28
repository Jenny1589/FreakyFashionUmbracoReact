import React, { Component } from 'react';

const Category = (props) => {
    let category = props.category;
    return (<h1>{ category.name }</h1>);
}
 
export default Category;