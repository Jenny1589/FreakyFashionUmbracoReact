import React from 'react';
import { Link } from 'react-router-dom'; 
import './banner.css';

const Banner = (props) => {
    return (  
        <div className="container-fluid px-5">
            <Link to={ props.bannerUrl } className="banner">
                <img className="img-fluid" src={ props.imgUrl } alt="Link to current sale" />
                <div className="banner-text">{ props.text.toUpperCase() }</div>
            </Link>            
        </div>
    );
}
 
export default Banner;