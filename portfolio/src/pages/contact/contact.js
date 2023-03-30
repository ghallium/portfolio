import "./contact.css";


function Contact() {
    return (
        <div className="contact-pageblock">
            <div className="contact-coverimage">
                <div className="cover">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="contactform-container">
                <form>
                    <div className="name-email">
                        <input type="text" autoComplete="none" placeholder="Entrez votre nom"></input>
                        <input type="email" autoComplete="none" placeholder="Entrez votre adresse e-mail"></input>
                    </div>
                    <div className="message-submit">
                        <input type="text" autoComplete="none" placeholder="Votre message"></input>
                        <button>Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact 