import React from 'react';
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import Icon from '../icon/icon';

const Footer = () => {
    const url = services.ApiUrl + services.contentRoute + 'getfooter';
    const [elements, isLoading] = getContent(url);

    function renderElements(){
        return elements.map(e => {
            return (
                <span className="d-flex align-items-center">
                    <Icon iconName= { e.iconName } />
                    <span>{ e.text }</span>
                </span>
            );
        });
    }

    return ( isLoading ? <div>Loading...</div> :
        <footer className="container-fluid d-flex flex-column bg-primary text-white p-5 mt-5">
            <div className="d-flex justify-content-around mb-5">
                { renderElements() }
            </div>
            <div className="d-flex justify-content-center">
                <span>&copy; Jenny Kallerup</span>
            </div>
        </footer>
    );
}
 
export default Footer;