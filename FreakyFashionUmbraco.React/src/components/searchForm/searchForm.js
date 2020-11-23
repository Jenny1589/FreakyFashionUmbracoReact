import React from 'react';
import Icon from '../icon/icon';
import './searchForm.css';

const SearchForm = (props) => {

    return (  
        <form className="d-flex align-items-center" onSubmit={props.onSearch}>
            <Icon iconName="search" />
            <input  name="query" 
                    type="search" 
                    placeholder="Search..." />
        </form>
    );
}
 
export default SearchForm;