import {Nav} from "./Nav";

export function Header(){
    return(
        <header className="header">
            <a href="#">Logo</a>
            <Nav></Nav>
        </header>
    );
}
export default Header;