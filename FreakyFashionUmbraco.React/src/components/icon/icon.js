import React from 'react';

const Icon = (props) => {
    return ( 
        <span className="material-icons mr-2">
            { props.iconName }
        </span>
     );
}
 
export default Icon;