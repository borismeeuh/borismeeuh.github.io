import plane from "../images/svg/plane-icon.svg";
import { useForm } from "@formspree/react";

function Contact() {
    const [state, handleSubmit] = useForm("moqgbgqp");
    if (state.succeeded) {
        document.getElementById("submit-text").innerText = "Thank you!";
        document.getElementById("email").value = "";
        document.getElementById("topic").value = "";
        document.getElementById("message").value = "";

        setTimeout(() => {
            document.getElementById("submit-text").innerText = "Send";
        }, 5000);
    }

    return (
        <div className="contact" id="contact">
            <div className="contact-animation-wrapper">
                <div className="contact-animation-blob1"></div>
                <div className="contact-animation-blob2"></div>
                <div className="contact-animation-blob3"></div>
                <div className="contact-animation-blob4"></div>
                <div className="contact-animation-blob5"></div>
            </div>
            <div className="contact-form-wrapper">
                <h1 className="title">Contact</h1>
                <form
                    action="https://formspree.io/f/moqgbgqp"
                    className="contact-form"
                    method="POST"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}
                >
                    <div className="contact-form-email-wrapper">
                        <input
                            className="contact-form-input"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            type="email"
                        />
                        <hr />
                    </div>
                    <div className="contact-form-topic-wrapper">
                        <input
                            className="contact-form-input"
                            id="topic"
                            name="topic"
                            placeholder="Subject"
                            required
                            type="text"
                        />
                        <hr />
                    </div>
                    <div className="contact-form-message-wrapper">
                        <textarea
                            className="contact-form-text-area"
                            id="message"
                            name="message"
                            placeholder="Your question or message"
                            required
                        ></textarea>
                        <hr />
                    </div>
                    <button className="contact-form-submit" type="submit">
                        <img src={plane} alt="Papar plane" loading="lazy"></img>
                        <span id="submit-text">Send</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
