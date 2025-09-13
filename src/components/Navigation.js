import { useState, useEffect, useRef } from "react";
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
		const about = document
			.getElementById("about")
			.getBoundingClientRect().top;
		const projects = document
			.getElementById("projects")
			.getBoundingClientRect().top;
		const contact = document
			.getElementById("contact")
			.getBoundingClientRect().top;

		const halfScreenPoint = window.innerHeight / 2;

		if (contact < halfScreenPoint) {
			setSectionInView("contact");
		} else if (projects < halfScreenPoint) {
			setSectionInView("projects");
		} else if (about < halfScreenPoint) {
			setSectionInView("about");
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

	const currentSectionRef = useRef(null);

	const handleKeyDown = (event, section) => {
		if (event.key === "Enter") {
			currentSectionRef.current = section;

			document.getElementById(section).scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	const tabElemAfterNav = () => {
		setTimeout(() => {
			if (
				document
					.getElementsByClassName("navigation")[0]
					.contains(document.activeElement)
			) {
				return;
			} else {
				if (currentSectionRef.current === null) {
					return;
				}

				const section = document.getElementById(
					currentSectionRef.current
				);

				if (section === null) {
					return;
				}

				const focusableElementsCollection = section.querySelectorAll(
					'a[href], button, textarea, input, select, details,[tabindex]:not([tabindex="-1"])'
				);

				const focusableElements = Array.from(
					focusableElementsCollection
				).filter((el) => {
					const style = window.getComputedStyle(el);

					const isVisible =
						style.display !== "none" &&
						style.visibility !== "hidden" &&
						style.opacity !== "0";

					return (
						!el.disabled && el.offsetParent !== null && isVisible
					);
				});

				const isInViewport = (el) => {
					const rect = el.getBoundingClientRect();

					return (
						rect.top >= 0 ||
						rect.left >= 0 ||
						rect.bottom <=
							(window.innerHeight ||
								document.documentElement.clientHeight) ||
						rect.right <=
							(window.innerWidth ||
								document.documentElement.clientWidth)
					);
				};

				const firstVisible = focusableElements.find(isInViewport);

				if (firstVisible) {
					firstVisible.focus();
					currentSectionRef.current = null;
				}
			}
		}, 0);
	};

	function setNavigationTitle(el, title) {
		let navButton = document.getElementById(el);
		navButton.setAttribute("nav-text", title);
	}

	return (
		<nav className="navigation">
			<ScrollIntoView selector="#hero">
				<div
					id="nav-hero"
					tabIndex="0"
					className={`navigation-icon ${
						sectionInView === "hero" ? "navigation-icon-active" : ""
					}`}
					onMouseEnter={() => setNavigationTitle("nav-hero", "Home")}
					onFocus={() => setNavigationTitle("nav-hero", "Home")}
					onKeyDown={(event) => handleKeyDown(event, "hero")}
				></div>
			</ScrollIntoView>

			<ScrollIntoView selector="#intro">
				<div
					id="nav-intro"
					tabIndex="0"
					className={`navigation-icon ${
						sectionInView === "intro"
							? "navigation-icon-active"
							: ""
					}`}
					onMouseEnter={() =>
						setNavigationTitle("nav-intro", "Intro")
					}
					onFocus={() => setNavigationTitle("nav-intro", "Intro")}
					onKeyDown={(event) => handleKeyDown(event, "intro")}
				></div>
			</ScrollIntoView>

			<ScrollIntoView selector="#education">
				<div
					id="nav-education"
					tabIndex="0"
					className={`navigation-icon ${
						sectionInView === "education"
							? "navigation-icon-active"
							: ""
					}`}
					onMouseEnter={() =>
						setNavigationTitle("nav-education", "Education")
					}
					onFocus={() =>
						setNavigationTitle("nav-education", "Education")
					}
					onKeyDown={(event) => handleKeyDown(event, "education")}
				></div>
			</ScrollIntoView>

			<ScrollIntoView selector="#skills">
				<div
					id="nav-skills"
					tabIndex="0"
					className={`navigation-icon ${
						sectionInView === "skills"
							? "navigation-icon-active"
							: ""
					}`}
					onMouseEnter={() =>
						setNavigationTitle("nav-skills", "Experience")
					}
					onFocus={() =>
						setNavigationTitle("nav-skills", "Experience")
					}
					onKeyDown={(event) => handleKeyDown(event, "skills")}
				></div>
			</ScrollIntoView>

			<ScrollIntoView selector="#about">
				<div
					id="nav-about"
					tabIndex="0"
					className={`navigation-icon ${
						sectionInView === "about"
							? "navigation-icon-active"
							: ""
					}`}
					onMouseEnter={() =>
						setNavigationTitle("nav-about", "About")
					}
					onFocus={() => setNavigationTitle("nav-about", "About")}
					onKeyDown={(event) => handleKeyDown(event, "about")}
				></div>
			</ScrollIntoView>

			<ScrollIntoView selector="#projects">
				<div
					id="nav-projects"
					tabIndex="0"
					className={`navigation-icon ${
						sectionInView === "projects"
							? "navigation-icon-active"
							: ""
					}`}
					onMouseEnter={() =>
						setNavigationTitle("nav-projects", "Projects")
					}
					onFocus={() =>
						setNavigationTitle("nav-projects", "Projects")
					}
					onKeyDown={(event) => handleKeyDown(event, "projects")}
				></div>
			</ScrollIntoView>

			<ScrollIntoView selector="#contact">
				<div
					id="nav-contact"
					tabIndex="0"
					className={`navigation-icon ${
						sectionInView === "contact"
							? "navigation-icon-active"
							: ""
					}`}
					onMouseEnter={() =>
						setNavigationTitle("nav-contact", "Contact")
					}
					onFocus={() => setNavigationTitle("nav-contact", "Contact")}
					onKeyDown={(event) => handleKeyDown(event, "contact")}
					onBlur={() => tabElemAfterNav()}
				></div>
			</ScrollIntoView>
		</nav>
	);
}

export default Navigation;
