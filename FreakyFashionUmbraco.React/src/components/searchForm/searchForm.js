import React from 'react';
import Icon from '../icon/icon';
import './searchForm.css';

const SearchForm = () => {
    return (  
        <form className="d-flex align-items-center" action="/search">
            <Icon iconName="search" />
            <input  name="query" 
                    type="search" 
                    placeholder="Search..." />
        </form>
    );
}
 
export default SearchForm;