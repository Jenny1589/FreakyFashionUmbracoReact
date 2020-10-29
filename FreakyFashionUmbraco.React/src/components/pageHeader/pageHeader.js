import React from 'react';
import './pageHeader.css';

const PageHeader = (props) => {
    if(!props.text) throw '[PageHeader]: Prop text must have a value!';

    function getBgTextClasses(){
        let classes = 'page-header-background text-';
        classes += !props.darkMode ? 'white' : 'black-50';

        return classes;
    }

    function getTextClasses(){
        let classes = 'page-header mt-4 text-';
        classes += !props.darkMode ? 'black' : 'white';

        return classes;
    }

    return ( 
        <div className="page-header-container">
            <div className={ getBgTextClasses() }>
                { props.bgText !== undefined ? props.bgText : props.text }
                <h2 className={ getTextClasses() }>
                    { props.text.toUpperCase() }
                </h2>
            </div>
        </div>
    );
}
 
export default PageHeader;