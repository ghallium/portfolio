import "./contact.css";
import {useForm} from 'react-hook-form';

const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}

function Contact() {
    const { register, formState: { errors }, handleSubmit, isSubmitting } = useForm();
    
    const onSubmit = async data => {
        await wait(2000)
    }

    return (
        <div className="contact-pageblock">
            <div className="contact-coverimage">
                <div className="cover">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="contactform-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="name-email">
                        <input type="text" autoComplete="none" name="name" placeholder="Entrez votre nom" {... register("name", {required: true})}/>
                            {errors.name && <p className="error-message">Veuillez entrer votre nom.</p>}
                        <input type="email" autoComplete="none" name="email" placeholder="Entrez votre adresse e-mail" {... register("email", {required: true})}/>
                            {errors.email && <p className="error-message">Veuillez entrer votre adresse e-mail.</p>}
                    </div>
                    <div className="message-submit">
                        <input type="text" autoComplete="none" name="message" placeholder="Votre message" {... register("message", {required: true})}/>
                            {errors.message && <p className="error-message">N'oubliez pas de laisser votre message !</p>}
                        <button disabled={isSubmitting}>Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
