import React from "react";

import './custom-button.styles.scss';


const CustomButton = ({ children, isGoogleSignIn, offer, checked, inverted,  ...otherprops }) => (
    <button 
        className={`${inverted ? 'inverted' : ''}
        ${checked ? 'checked' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} 
        ${offer ? 'offer' : ''} custom-button`}

        {...otherprops}
    >
        {children}
    </button>
)

export default CustomButton;