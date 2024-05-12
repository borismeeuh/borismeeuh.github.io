import { useState, useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";

function Navigation() {
    const [sectionInView, setSectionInView] = useState("hero");
    const [YScroll, setYScroll] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setYScroll(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        checkWhichBlockIsInView();
    }, [YScroll]);

    function checkWhichBlockIsInView() {
        const hero = document
            .getElementById("hero")
            .getBoundingClientRect().top;
        const intro = document
            .getElementById("intro")
            .getBoundingClientRect().top;
        const education = document
            .getElementById("education")
            .getBoundingClientRect().top;
        const skills = document
            .getElementById("skills")
            .getBoundingClientRect().top;
        const contact = document
            .getElementById("contact")
            .getBoundingClientRect().top;

        const halfScreenPoint = window.innerHeight / 2;

        if (contact < halfScreenPoint) {
            setSectionInView("contact");
        } else if (skills < halfScreenPoint) {
            setSectionInView("skills");
        } else if (education < halfScreenPoint) {
            setSectionInView("education");
        } else if (intro < halfScreenPoint) {
            setSectionInView("intro");
        } else if (hero < halfScreenPoint) {
            setSectionInView("hero");
        }
    }

    function setNavigationTitle(el, title) {
        let navButton = document.getElementById(el);
        navButton.setAttribute("nav-text", title);
    }

    return (
        <div className="navigation">
            <ScrollIntoView selector="#hero">
                <div
                    id="nav-hero"
                    className={`navigation-icon ${
                        sectionInView === "hero" ? "navigation-icon-active" : ""
                    }`}
                    onMouseEnter={() => {
                        setNavigationTitle("nav-hero", "Home");
                    }}
                ></div>
            </ScrollIntoView>

            <ScrollIntoView selector="#intro">
                <div
                    id="nav-intro"
                    className={`navigation-icon ${
                        sectionInView === "intro"
                            ? "navigation-icon-active"
                            : ""
                    }`}
                    onMouseEnter={() => {
                        setNavigationTitle("nav-intro", "Intro");
                    }}
                ></div>
            </ScrollIntoView>

            <ScrollIntoView selector="#education">
                <div
                    id="nav-education"
                    className={`navigation-icon ${
                        sectionInView === "education"
                            ? "navigation-icon-active"
                            : ""
                    }`}
                    onMouseEnter={() => {
                        setNavigationTitle("nav-education", "Education");
                    }}
                ></div>
            </ScrollIntoView>

            <ScrollIntoView selector="#skills">
                <div
                    id="nav-skills"
                    className={`navigation-icon ${
                        sectionInView === "skills"
                            ? "navigation-icon-active"
                            : ""
                    }`}
                    onMouseEnter={() => {
                        setNavigationTitle("nav-skills", "Experience");
                    }}
                ></div>
            </ScrollIntoView>

            <ScrollIntoView selector="#contact">
                <div
                    id="nav-contact"
                    className={`navigation-icon ${
                        sectionInView === "contact"
                            ? "navigation-icon-active"
                            : ""
                    }`}
                    onMouseEnter={() => {
                        setNavigationTitle("nav-contact", "Contact");
                    }}
                ></div>
            </ScrollIntoView>
        </div>
    );
}

export default Navigation;
