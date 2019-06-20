import React from 'react'

const validation = (props) => {
    let validationMessage = 'Text is long enough';

    if(props.lengthOfInput <= 5) {
        validationMessage = 'Text is too short';
    }
    return (
        <p> {validationMessage} </p>
        
    );
}

export default validation;