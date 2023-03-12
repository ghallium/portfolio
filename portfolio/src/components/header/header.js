import "./header.css";
import Name from "../../assets/name.svg";

function Header() {
    return <header>
                <div className="header_title">
                    <a href="/"><img src={Name} alt="Guillaume Robert Développeur web junior"></img></a>
                    <div className="greenLine"></div>
                </div>
                <nav>
                    <a href="/about">à propos</a>
                    <a href="/projects">Projets</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
}

export default Header