import React, { useState } from 'react';
import { services } from '../../../package.json';
import './imageDisplay.css';

const ImageDisplay = (props) => {
    const [ mainImage, setMainImage ] = useState(props.imageUrls[0]);

    function renderImages(){
        return props.imageUrls.map((u, i) => {
            return (
                <div key={ i } className="image-container" onClick={() => setMainImage(u)}>
                    <img src={ services.ApiUrl + u } alt="" />
                </div>
            );
        });
    }

    return (  
        <div className="image-display mx-4">
            <div className="image-container shadow">
                <img src={ services.ApiUrl + mainImage } alt="" />
            </div>
            <div className="image-list">
                { renderImages() }
            </div>
        </div>
    );
}
 
export default ImageDisplay;