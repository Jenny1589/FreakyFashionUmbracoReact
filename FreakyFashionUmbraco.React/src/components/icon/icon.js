import React from 'react';

const Icon = (props) => {
    return ( 
        <span className="material-icons">
            { props.iconName }
        </span>
     );
}
 
export default Icon;