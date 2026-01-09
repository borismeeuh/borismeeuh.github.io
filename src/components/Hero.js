import ChevronDown from "../images/svg/chevron-down.svg";
import LinkedInLogo from "../images/svg/linkedin-icon.svg";
import GithubLogo from "../images/svg/github-icon.svg";
import Logo from "../images/logos/thin-hexagon-white.svg";
import ScrollIntoView from "react-scroll-into-view";
import Wave from "../images/svg/wave-single.svg";

function Hero() {
    const navigateToSection = (event) => {
        if (event.key === "Enter") {
            document.getElementById("intro").scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="hero" id="hero">
            <div className="hero-overlay">
                <div className="planet1">
                    <div className="planet1-ring"></div>
                </div>
                <div className="planet2">
                    <div className="planet2-ring"></div>
                </div>
                <div className="planet3">
                    <div className="planet3-ring"></div>
                </div>
            </div>
            <div className="hero-wave">
                <img src={Wave} alt="Wave" />
            </div>
            <div className="hero-content">
                <div className="hero-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="hero-text">
                    <h1 className="hero-title title">
                        Hi, I'm Boris <br /> Welcome!
                    </h1>
                    <div className="hero-sub subtitle">Front-End Developer</div>
                </div>
                <div
                    className="hero-icon"
                    tabIndex="0"
                    onKeyDown={navigateToSection}
                >
                    <ScrollIntoView selector="#intro">
                        <img
                            src={ChevronDown}
                            alt="Scroll down"
                            className="hero-icon-svg"
                        />
                    </ScrollIntoView>
                </div>
            </div>
            <div className="hero-stars">
                <span className="hero-star"></span>
                <span className="hero-star"></span>
                <span className="hero-star"></span>
                <span className="hero-star"></span>
                <span className="hero-star"></span>
                <span className="hero-star"></span>
                <span className="hero-star"></span>
                <span className="hero-star"></span>
                <span className="hero-shootingStar" id="shoot1"></span>
                <span className="hero-shootingStar" id="shoot2"></span>
                <span className="hero-shootingStar" id="shoot3"></span>
            </div>
            <div className="hero-social-icons">
                <a href="https://linkedin.com/in/boris-kamstra-201005209" target="_blank" rel="noreferrer"><img className="hero-social-icon" src={LinkedInLogo} alt="LinkedIn logo"/></a>
                <a href="https://github.com/borismeeuh" target="_blank" rel="noreferrer"><img className="hero-social-icon" src={GithubLogo} alt="Github logo"/></a>
            </div>
        </section>
    );
}

export default Hero;
