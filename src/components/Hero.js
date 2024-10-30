import { IconChevronDown } from "@tabler/icons-react";
import Logo from "../images/logos/thin-hexagon-white.svg";
import ScrollIntoView from "react-scroll-into-view";
import Wave from "../images/svg/wave-single.svg";

function Hero() {
    return (
        <div className="hero" id="hero">
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
                <img src={Wave} alt="Wave" loading="lazy" />
            </div>
            <div className="hero-content">
                <div className="hero-logo">
                    <img src={Logo} alt="Logo" loading="lazy" />
                </div>
                <div className="hero-text">
                    <div className="hero-title title">
                        Hi, I'm Boris Kamstra <br /> Welcome!
                    </div>
                    <div className="hero-sub subtitle">
                        Front-End Developer
                    </div>
                </div>
                <div className="hero-icon">
                    <ScrollIntoView selector="#intro">
                        <IconChevronDown size={60} />
                    </ScrollIntoView>
                </div>
            </div>
            <div className="stars">
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="shootingStar" id="shoot1"></span>
                <span className="shootingStar" id="shoot2"></span>
                <span className="shootingStar" id="shoot3"></span>
            </div>
        </div>
    );
}

export default Hero;
