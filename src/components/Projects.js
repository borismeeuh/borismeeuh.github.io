import chevronLeft from "../images/svg/chevron-left.svg";
import chevronRight from "../images/svg/chevron-right.svg";
import { useState, useEffect } from "react";

function Projects() {
    const items = [
        {
            title: "Dutch Weather App",
            paragraph:
                "A weather app that allows the user to check the weather in the Netherlands. The app has a simple front-end built in Svelte.",
            tech: ["Svelte", "Javascript"],
            image: "Weather App.png",
            link: "https://challanges-svelte.vercel.app/",
        },
        {
            title: "Original Web Portfolio",
            paragraph:
                "My original web portfolio, built using HTML, CSS, Javascript, and Laravel. It features a light/dark mode toggle, a CRUD system for entering grades, a login system, and password security.",
            tech: ["HTML", "CSS", "Javascript", "Laravel"],
            image: "First Portfolio.png",
        },
        {
            title: "GO For IT",
            paragraph:
                "A website built to promote the Go For IT event. It's built using Vue and SCSS.",
            tech: ["Vue", "SCSS", "Javascript"],
            image: "gfi.png",
            link: "https://gfi.dev/home"
        },
    ];

    let [itemNumber, setItemNumber] = useState(0);
    let currentItem = items[itemNumber];
    let currentImage = require("../images/" + currentItem.image);

    useEffect(() => {
        if (itemNumber <= 0) {
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

                    <div className="projects-card">
                        <div className="projects-card-left">
                            <div className="title">{currentItem.title}</div>
                            <div className="paragraph">
                                {currentItem.paragraph}
                            </div>
                            <div className="projects-card-tech">
                                {currentItem.tech.map((item) => (
                                    <span className="projects-tech-tag">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="projects-card-right">
                            {currentItem.link ? (
                                <a href={currentItem.link} target="_blank">
                                    <img
                                        className="projects-card-image"
                                        src={currentImage}
                                    />
                                </a>
                            ) : (
                                <img
                                    className="projects-card-image"
                                    src={currentImage}
                                />
                            )}
                        </div>
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
