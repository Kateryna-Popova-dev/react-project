import React, {useState} from "react";
import img1 from "../../image/photos/1.jpg";
import img2 from "../../image/photos/2.jpg";
import img3 from "../../image/photos/3.jpg";
import img4 from "../../image/photos/4.jpg";
import img5 from "../../image/photos/5.jpg";
import img6 from "../../image/photos/6.jpg";
import img7 from "../../image/photos/7.jpg";
import img8 from "../../image/photos/8.jpg";
import img9 from "../../image/photos/9.jpg";
import img10 from "../../image/photos/10.jpg";

let arrPhoto = [img5, img2, img3, img4, img1, img6, img7, img8, img9, img10];

const pictureWidth = 830;

export function Photos() {

    const [getLeftPosition,setLeftPosition] = useState(0)

    return (
        <div className="photos" id="photos">
            <button onClick={() => setLeftPosition(Math.min(getLeftPosition + pictureWidth,0))} className="arrow btn-last">⇦</button>
            <div className="photo-list">
                <ul style={{left:getLeftPosition + 'px'}}>
                {photo()}
                </ul>
            </div>
            <button onClick={() => setLeftPosition( Math.max (getLeftPosition - pictureWidth,-pictureWidth * (arrPhoto.length - 1)) )} className="arrow btn-next">⇨</button>
        </div>
    )
}

const photo = () => {
    return arrPhoto.map(item=>

            <li key={item}><img src={item}></img></li>

    )
}