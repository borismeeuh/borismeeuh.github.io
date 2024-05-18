import email from "../images/svg/email-icon.svg";
import linkedIn from "../images/svg/linkedin-icon.svg";

function Socials() {
    return (
        <div className="socials">
            <div className="socials-wrapper">
                <div className="contact-info-spacer">
                    <span className="paragraph">
                        If you'd like to send me amessage or have a question you
                        can reach out to me by filling out the form on the left.
                    </span>
                    <span className="paragraph">
                        Website built by yours truly using only React and
                        vanilla CSS.
                    </span>
                </div>
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
    );
}

export default Socials;
