import chevronLeft from "../images/svg/chevron-left.svg";
import chevronRight from "../images/svg/chevron-right.svg";
import { useState, useEffect } from "react";

function Projects() {
    const items = ["one", "two", "three"];

    let [itemNumber, setItemNumber] = useState(1);
    let currentItem = items[itemNumber];

    useEffect(() => {
        if ((itemNumber <= 0)) {
            document.getElementById("chevronLeft").style.visibility = "hidden";
        }

        if (itemNumber >= items.length - 1) {
            document.getElementById("chevronRight").style.visibility = "hidden";
        }
    });

    function shiftLeft() {
        document.getElementById("chevronRight").style.visibility = "visible";

        if (itemNumber > 0) {
            setItemNumber(itemNumber - 1);
        } else {
            document.getElementById("chevronLeft").style.visibility = "hidden";
        }
    }

    function shiftRight() {
        document.getElementById("chevronLeft").style.visibility = "visible";
        if (itemNumber < items.length - 1) {
            setItemNumber(itemNumber + 1);
        } else {
            document.getElementById("chevronRight").style.visibility = "hidden";
        }
    }

    return (
        <div className="projects" id="projects">
            <div className="projects-wrapper">
                <div>
                    <h1 className="title">Projects</h1>
                </div>
                <div className="projects-carousel">
                    <div
                        className="projects-button"
                        id="chevronLeft"
                        onClick={shiftLeft}
                    >
                        <img src={chevronLeft} alt="" />
                    </div>

                    {}
                    <div className="projects-card">
                        <span>{currentItem}</span>
                        <div className="projects-card-left">
                            <div className="title">Dutch Weather App</div>
                            <div className="paragraph">
                                A weather app that allows the user to check the
                                weather in the Netherlands. The app has a simple
                                front-end built in Svelte.
                            </div>
                            <div className="projects-card-tech">
                                <span className="projects-tech-tag">
                                    svelte
                                </span>
                                <span className="projects-tech-tag">
                                    svelte
                                </span>
                                <span className="projects-tech-tag">
                                    svelte
                                </span>
                            </div>
                        </div>
                        <div className="projects-card-right"></div>
                    </div>

                    <div
                        className="projects-button"
                        id="chevronRight"
                        onClick={shiftRight}
                    >
                        <img src={chevronRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
