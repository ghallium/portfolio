
import "./footer.css";

function Footer() {
    
    return (
        <footer>
           <p>© Guillaume ROBERT - 2023</p>
           <div className="footer-socialicons">
                <a href="mailto:guillaumerober@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                <a href="http://www.linkedin.com/in/guill-robert" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="http://www.github.com/ghallium" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
           </div>
           <p>Tous droits réservés</p> 
           
        </footer>
    )
}

export default Footer 