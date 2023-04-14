import "./header.css";
import { Link } from "react-router-dom";
import Name from "../../assets/name.svg";

function Header() {
    return <header>
                <div className="header_title">
                    <Link to="/"><img src={Name} alt="Guillaume Robert Développeur web junior"></img></Link>
                    
                </div>
                <nav>
                    <Link to="/about">à propos</Link>
                    <Link to="/projects">projets</Link>
                    <Link to="/contact">contact</Link>
                </nav>
            </header>
}

export default Header