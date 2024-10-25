import chevronLeft from "../images/svg/chevron-left.svg";
import chevronRight from "../images/svg/chevron-right.svg";
import { useState, useEffect } from "react";

function Projects() {
    const items = [
        {
            title: "Solar System Model",
            paragraph:
                "A solar system model built using Babylon.js 3D engine. The sizes of the planets and inter-planetary distances are representative of real life. The app is a work in progress",
            tech: ["Babylon.js", "Vue", "Javascript"],
            image: "Solar System.png",
            link: "https://borismeeuh.github.io/solar-system/",
        },
        {
            title: "GO For IT",
            paragraph:
                "A website built to promote the Go For IT event. It's built using Vue and SCSS.",
            tech: ["Vue", "SCSS", "JavaScript"],
            image: "gfi.png",
            link: "https://gfi.dev/home",
        },
        {
            title: "Graduation Assignment",
            paragraph:
                "My graduation project involved rebuilding an existing app along SaaS principles. Key features were multi-tenancy and dynamism. ",
            tech: ["Vue", "Nuxt", "TypeScript", "JavaScript", "SCSS"],
        },
        {
            title: "Weather App",
            paragraph:
                "A weather app that allows the user to check the weather in the Netherlands. The app has a simple front-end built in Svelte.",
            tech: ["Svelte", "JavaScript"],
            image: "Weather App.png",
            link: "https://challanges-svelte.vercel.app/",
        },
        {
            title: "Old Web Portfolio",
            paragraph:
                "My first web portfolio, built using HTML, CSS, JavaScript, and Laravel. It features a light/dark mode toggle, a CRUD system for entering grades, a login system, and password security.",
            tech: ["HTML", "CSS", "JavaScript", "Laravel"],
            image: "First Portfolio.png",
        },
    ];

    let [itemNumber, setItemNumber] = useState(0);

    let itemsNavigation = items.map((item, key) => {
        return (
            <div
                className={`projects-carousel-nav-item ${
                    key == itemNumber
                        ? "projects-carousel-nav-item--active"
                        : ""
                }`}
                id={`${"projects-carousel-nav-item--" + key}`}
                onClick={() => {
                    setNavItem(key);
                }}
            ></div>
        );
    });

    let currentItem = items[itemNumber];
    let currentImage = currentItem.image
        ? require("../images/" + currentItem.image)
        : undefined;

    useEffect(() => {
        if (itemNumber <= 0) {
            document.getElementById("chevronLeft").style.visibility = "hidden";
        } else {
            document.getElementById("chevronLeft").style.visibility = "visible";
        }

        if (itemNumber >= items.length - 1) {
            document.getElementById("chevronRight").style.visibility = "hidden";
        } else {
            document.getElementById("chevronRight").style.visibility =
                "visible";
        }
    });

    function removeCurrentItemClass() {
        let navItems = document.getElementsByClassName(
            "projects-carousel-nav-item"
        );

        for (const navItem of navItems) {
            for (const className of navItem.classList) {
                if (className === "projects-carousel-nav-item--active") {
                    navItem.classList.remove(
                        "projects-carousel-nav-item--active"
                    );
                }
            }
        }
    }

    function setNavItem(item) {
        removeCurrentItemClass();

        let el = document.getElementById("projects-carousel-nav-item--" + item);
        el.classList.add("projects-carousel-nav-item--active");
        setItemNumber(item);
    }

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
                                {currentItem.tech.map((item, key) => (
                                    <span
                                        className="projects-tech-tag"
                                        key={key}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="projects-card-right">
                            {currentImage !== undefined ? (
                                currentItem.link ? (
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
                                )
                            ) : (
                                <div className="projects-image-unavailable">
                                    <div>No image available</div>
                                </div>
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
                <div className="projects-carousel-nav">
                    <div className="projects-carousel-nav-buttons">
                        {itemsNavigation}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
