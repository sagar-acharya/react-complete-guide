import React from 'react'

const person = (props) => {
    const customBorder = {
        border:'1px solid red'
    }
    return (
        <div>
            <p onClick={props.click} style={customBorder}>My Name is {props.name} and i'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;