import React from 'react';
import './dialogYesOrNo.css';

const DialogYesOrNo = (props) => {

    function getClasses() {
        return props.isVisible ? "dialog-mask" : "d-none";
    }

    return ( 
        <div className={getClasses()}>
            <div className="dialog shadow border">
                <div>
                    {props.children}
                </div>
                <div>
                    <button className="btn btn-outline-primary mr-2" onClick={props.onYes}>
                        Yes
                    </button>
                    <button className="btn btn-primary" onClick={props.onNo}>
                        No
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default DialogYesOrNo;