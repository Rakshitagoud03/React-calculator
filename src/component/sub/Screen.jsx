import React from 'react'

function Screen(props){
    return(
        <div className={props.class}>
            <h5>{props.input}</h5>
            <h3>{props.result}</h3>
        </div>
    )
}
export default Screen