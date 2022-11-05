import React, {useState} from 'react';
import svg from '../image/star-icon.svg'

export const Stars = (props) => {
    let [points, setPoints] = useState(props.points);
    let [dynamicPoints, setDynamicPoints] = useState(0);

    const count = [1, 2, 3, 4, 5];

    const saveResult = (event) => {
        count.forEach(i => {
            if (event.target.closest(`#a${i}`)) {
                setPoints(i)
                console.log(points)
            }

        })
    }
    const view = (event) => {
        count.forEach(i => {
            if (event.target.closest(`#a${i}`)) {
                setDynamicPoints(i)
            }

        })
    }
    const hide = (event) => {
        count.forEach(i => {
            if (event.target.closest(`#a${i}`)) {
                setDynamicPoints(points)
            }
        })
    }

    return (
        <div onPointerOver={view} onPointerOut={hide} onClick={saveResult} className="container">
            {count.map(i =>
                <img id={`a${i}`} className={i <= dynamicPoints ? 'isActive' : null} src={svg}/>
            )}
        </div>
    );
};

export default Stars;