import email from "../images/svg/email-icon.svg";
import linkedIn from "../images/svg/linkedin-icon.svg";
import plane from "../images/svg/plane-icon.svg";

function Contact() {
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
                <form className="contact-form">
                <div className="contact-form-email-wrapper">
                        <input
                            className="contact-form-input"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                        <hr />
                    </div>
                    <div className="contact-form-topic-wrapper">
                        <input
                            className="contact-form-input"
                            id="topic"
                            type="text"
                            placeholder="Subject"
                        />
                        <hr />
                    </div>
                    <div className="contact-form-message-wrapper">
                        <textarea
                            className="contact-form-text-area"
                            id="message"
                            placeholder="Your question or message"
                        ></textarea>
                        <hr />
                    </div>
                    <div className="contact-form-submit">
                        <img src={plane} alt="Plane"></img>
                        <span>Send</span>
                    </div>
                </form>
            </div>
            <div className="contact-info">
                <div className="contact-info-spacer">
                    <span className="paragraph">
                        If you'd like to send me amessage or have a question you
                        can reach out to me by filling out the form on the left.
                        <br />
                        <br />
                        Website built by yours truly using only React and
                        vanilla CSS.
                    </span>
                    <div className="contact-socials">
                        <a
                            href="https://nl.linkedin.com/in/boris-kamstra-201005209"
                            target="_blank"
                        >
                            <img
                                src={linkedIn}
                                alt="LinkedIn"
                                className="contact-social-media-button"
                            ></img>
                        </a>
                        <a href="" target="_blank">
                            <img
                                src={email}
                                alt="email"
                                className="contact-social-media-button"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
