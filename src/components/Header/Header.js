import img1 from '../../image/107-Johnny-Depp.jpg.webp';

import {Nav} from "./Nav";

export function Header() {
    return (
        <header className="header">
            <div className="block1">
                <div className="image-holder">
                    <img src={img1}/>
                </div>
                <div className="name-holder">
                    <p>БИОГРАФИЯ АКТЕРА, РЕЖИССЕРА И МУЗЫКАНТА</p>
                    <h1>Johnny Depp</h1>
                </div>
            </div>
            <div className="block2">
                <Nav></Nav>
            </div>
        </header>
    );
}

export default Header;