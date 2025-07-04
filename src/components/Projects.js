import { useState, useEffect } from "react";
import chevronLeft from "../images/svg/chevron-left.svg";
import chevronRight from "../images/svg/chevron-right.svg";
import noImage from "../images/svg/no-image.svg";

function Projects() {
    const items = [
        {
            title: "Solar System Model",
            paragraph:
                "A solar system model built using Babylon.js 3D engine. The sizes of the planets and inter-planetary distances are representative of real life. The app is a work in progress",
            tech: ["Babylon.js", "Vue", "Javascript"],
            image: "Solar System.png",
            link: "https://borismeeuh.github.io/solar-system/",
            alt: "A project modelling the solar system using Babylon.js and Vue.js.",
        },
        {
            title: "GO For IT",
            paragraph:
                "A website built to promote the Go For IT event. It's built using Vue and SCSS.",
            tech: ["Vue", "SCSS", "JavaScript"],
            image: "gfi.png",
            link: "https://gfi.dev/home",
            alt: "Website made to promote an IT event.",
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
            alt: "App that returns the weather in a given place.",
        },
        {
            title: "Old Web Portfolio",
            paragraph:
                "My first web portfolio, built using HTML, CSS, JavaScript, and Laravel. It features a light/dark mode toggle, a CRUD system for entering grades, a login system, and password security.",
            tech: ["HTML", "CSS", "JavaScript", "Laravel"],
            image: "First Portfolio.png",
            alt: "My first portfolio website.",
        },
    ];

    let [itemNumber, setItemNumber] = useState(0);

    let itemsNavigation = items.map((item, key) => {
        return (
            <div
                key={key}
                className={`projects-carousel-nav-item ${
                    key === itemNumber
                        ? "projects-carousel-nav-item--active"
                        : ""
                }`}
                id={`${"projects-carousel-nav-item--" + key}`}
                onClick={() => {
                    setNavItem(key);
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setNavItem(key);
                    }
                }}
            ></div>
        );
    });

    const imagesArray = items.map((item) =>
        item.image ? require("../images/" + item.image) : undefined
    );

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

    useEffect(() => {
        const allCards = document.querySelectorAll(".projects-card");

        allCards.forEach((card) => {
            card.classList.remove(
                "projects-card-fade-in",
                "projects-card-fade-out"
            );

            const anchor = card?.querySelector("a");

            if (anchor) {
                anchor.tabIndex = -1;
            }
        });

        const currentCard = document.querySelector(
            `.projects-card-${itemNumber}`
        );

        if (currentCard) {
            currentCard.classList.add("projects-card-fade-in");

            const anchor = currentCard?.querySelector("a");

            if (anchor) {
                anchor.tabIndex = 0;
            }
        }
    }, [itemNumber]);

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
            setItemNumber((oldVal) => {
                const newVal = oldVal - 1;
                return newVal;
            });
        } else {
            document.getElementById("chevronLeft").style.visibility = "hidden";
        }
    }

    function shiftRight() {
        document.getElementById("chevronLeft").style.visibility = "visible";

        if (itemNumber < items.length - 1) {
            setItemNumber((oldVal) => {
                const newVal = oldVal + 1;
                return newVal;
            });
        } else {
            document.getElementById("chevronRight").style.visibility = "hidden";
        }
    }

    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;

        const deltaX = touchStartX - touchEndX;

        if (deltaX > 50) {
            shiftRight();
        } else if (deltaX < -50) {
            shiftLeft();
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <section className="projects" id="projects">
            <div className="projects-wrapper">
                <h1 className="title">Projects</h1>
                <div className="projects-carousel">
                    <div
                        className="projects-button"
                        id="chevronLeft"
                        onClick={shiftLeft}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                shiftLeft();
                            }
                        }}
                    >
                        <img
                            src={chevronLeft}
                            alt="Move slider left"
                            loading="lazy"
                        />
                    </div>

                    <div
                        className="projects-cards-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {items.map((item, index) => {
                            return (
                                <div
                                    className={`projects-card projects-card-${index} ${
                                        index === itemNumber
                                            ? "projects-card-fade-in"
                                            : ""
                                    }`}
                                    key={index}
                                >
                                    <div className="projects-card-left">
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="paragraph">
                                            {item.paragraph}
                                        </div>
                                        <div className="projects-card-tech">
                                            {item.tech.map(
                                                (techItem, techIndex) => (
                                                    <span
                                                        className="projects-tech-tag"
                                                        key={techIndex}
                                                    >
                                                        {techItem}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="projects-card-right">
                                        {imagesArray[index] !== undefined ? (
                                            item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="projects-card-image"
                                                >
                                                    <img
                                                        src={imagesArray[index]}
                                                        loading="lazy"
                                                        alt={item.alt}
                                                    />
                                                </a>
                                            ) : (
                                                <img
                                                    className="projects-card-image"
                                                    src={imagesArray[index]}
                                                    loading="lazy"
                                                    alt={item.alt}
                                                />
                                            )
                                        ) : (
                                            <div className="projects-image-unavailable">
                                                <img
                                                    src={noImage}
                                                    alt="Unavailable"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div
                        className="projects-button"
                        id="chevronRight"
                        onClick={shiftRight}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                shiftRight();
                            }
                        }}
                    >
                        <img
                            src={chevronRight}
                            alt="Move slider right"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="projects-carousel-nav">
                    <div className="projects-carousel-nav-buttons">
                        {itemsNavigation}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
