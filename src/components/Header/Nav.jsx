import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#person">О персоне</a>
                    </li>
                    <li>
                        <a href="#movies">Фильмография</a>
                    </li>
                    <li>
                        <a href="#awards">Награды и номинации</a>
                    </li>
                    <li>
                        <a href="#photos">Фотографии</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export {Nav}