import React from 'react';
import './banner.css';

const Banner = (props) => {
    return (  
        <div className="container-fluid px-5">
            <div className="banner">
                <img className="img-fluid" src={ props.imgUrl } alt="" />
                <div className="banner-text">{ props.text }</div>
            </div>            
        </div>
    );
}
 
export default Banner;