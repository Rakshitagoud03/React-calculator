import React from 'react'

function Button(props){
    return(
        <button className={props.class} onClick={()=>props.handler(props.title)}>{props.title}</button>
    )
}
export default Button