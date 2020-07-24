import React from 'react';
import './custom-button.styles.scss';

export const CustomButton = ({children, isGoogleSignedIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignedIn ? 'google-signin' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
