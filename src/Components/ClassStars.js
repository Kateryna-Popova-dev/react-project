import React from "react";
import svg from "../image/star-icon.svg";

class ClassStars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {points: props.points}
    }

    count = [1, 2, 3, 4, 5];
    toggleClass = (event) => {
        this.count.forEach(i => {
            if (event.target.closest(`#a${i}`)) {

                this.setState({points: i})
            }
        })
    }

    render() {
        return (
            <div onPointerOver={this.toggleClass} onClick={this.toggleClass} className="container">
                {this.count.map(i =>
                    <img id={`a${i}`} className={i <= this.state.points ? 'isActive' : null} src={svg}/>
                )}
            </div>
        );
    }
}

export default ClassStars;