import React from "react";

export function Title(props){
    return <h2 className={props.class} id={props.id}>{props.name}</h2>
}
export default Title;