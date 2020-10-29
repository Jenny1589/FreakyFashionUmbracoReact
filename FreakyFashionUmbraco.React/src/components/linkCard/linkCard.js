import React from 'react';
import './linkCard.css';
import { services } from '../../../package.json';
import { Link } from 'react-router-dom';

const LinkCard = (props) => {
    return (  
        <Link className="link-card shadow" to={ props.item.url }>
            <img className="link-card-image" src={ services.ApiUrl + props.item.imageUrl } alt={ props.item.name } />
            <div className="link-card-overlay">
                <span className="link-card-text">{ props.item.name }</span>
            </div>
        </Link>
    );
}

export default LinkCard;