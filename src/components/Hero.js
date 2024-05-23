import { IconChevronDown } from "@tabler/icons-react";
import ScrollIntoView from "react-scroll-into-view";
import Logo from "../images/logos/thin-hexagon-white.svg"

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
            <div className="hero-content">
                <div className="hero-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="hero-text">
                    <div className="hero-title title">
                        Hi, I'm Boris Kamstra <br /> Welcome!
                    </div>
                    <div className="subtitle">
                        Junior front-end developer
                    </div>
                </div>
                <div className="hero-icon">
                    <ScrollIntoView selector="#intro">
                        <IconChevronDown size={60} />
                    </ScrollIntoView>
                </div>
            </div>
        </div>
    );
}

export default Hero;
