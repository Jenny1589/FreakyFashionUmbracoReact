import React from 'react';
import LinkCard from '../linkCard/linkCard';

const Grid = (props) => {
    const items = props.linkCardItems;
    if( items === undefined || items.length === 0){
        throw '[LinkGrid]: There must be items in the array provided for prop linkCardItems';
    } 

    function renderLinkCards(){
        const colWidth = 12 / props.linkCardItems.length;
        const colClass = 'col-' + colWidth;

        return items.map((i, index) =>
            <div key={ index } className={ colClass }>
                <LinkCard item={ i } />
            </div>
        );
    } 
    
    return (  
        <div className="container-fluid px-5 mt-5">
            <div className="row">
                { renderLinkCards() }
            </div>
        </div>
    );
}
 
export default Grid;