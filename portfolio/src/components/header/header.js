import "./header.css";
import Name from "../../assets/name.svg";

function Header() {
    return <header>
                <div className="header_title">
                    <a href="/"><img src={Name}></img></a>
                    <div className="greenLine"></div>
                </div>
                <nav>
                    <a href="/projects">Projets</a>
                    <a href="/about">A propos</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
}

export default Header