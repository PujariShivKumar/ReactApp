import React from 'react'

const Heroes = (props) =>{
    if(props.name === "joker"){
        throw new Error("not a hero")
    }

    return(
        <div>
            {props.name}
        </div>
    );
}

export default Heroes;