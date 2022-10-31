import React from "react";
import imgPerson from '../../image/JH2.jfif';
import arrDataPerson from "./DataPerson";
import {Biography} from "./Biography";

export function Person() {
    return (<>
        <div className="person-info" id="person">
            <div className="block-img">
                <img src={imgPerson}></img>
            </div>
            <div className="blockData">
                {data()}
            </div>
        </div>
    <Biography></Biography>
        </>
    );
}

export default Person;
const data = () => {
    return arrDataPerson.map(item =>
        <div key={item.name} className="list-item">
            <div className="nameCell"><span>{item.name}</span></div>
            <div className="dataCell"><span></span>{item.data}</div>
        </div>
    )
}