import React from "react";
import {arrAwards} from "./DataAwards";

export function Awards() {
    return (
        <div className="awards">
            <div className="awards-list">
                {awards()}
            </div>
        </div>
    )
}

export default Awards;

const awards = () => {
    return arrAwards.map(item =>
        <div key={item.name} className="awards-item">
            <div className="name"><span>{item.name}</span></div>
            <div className="data"><span>{item.data}</span></div>
            <div className="result"><span>{item.result}</span></div>
        </div>
    )
}