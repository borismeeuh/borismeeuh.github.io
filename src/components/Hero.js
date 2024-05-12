import { IconChevronDown } from "@tabler/icons-react";
import ScrollIntoView from "react-scroll-into-view";

function Hero() {
    return (
        <div className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
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
