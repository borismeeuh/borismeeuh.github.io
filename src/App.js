import AboutWebsite from "./components/About_website";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Socials from "./components/Socials";

function App() {
    // const scrolledInView = [
    //     {
    //         intro: false,
    //         education: false,
    //         skills: false,
    //         about: false,
    //         projects: false,
    //         contact: false,
    //     },
    // ];

    // function handleScroll() {
    //     const intro = document
    //         .getElementById("intro")
    //         .getBoundingClientRect().top;
    //     const education = document
    //         .getElementById("education")
    //         .getBoundingClientRect().top;
    //     const skills = document
    //         .getElementById("skills")
    //         .getBoundingClientRect().top;
    //     const about = document
    //         .getElementById("about")
    //         .getBoundingClientRect().top;
    //     const projects = document
    //         .getElementById("projects")
    //         .getBoundingClientRect().top;
    //     const contact = document
    //         .getElementById("contact")
    //         .getBoundingClientRect().top;

    //     const halfScreenPoint = window.innerHeight / 2;

    //     if (contact < halfScreenPoint) {
    //         addFadeIn('contact');
    //     } else if (projects < halfScreenPoint) {
    //         addFadeIn('projects');
    //     } else if (about < halfScreenPoint) {
    //         addFadeIn('about');
    //     } else if (skills < halfScreenPoint) {
    //         addFadeIn('skills');
    //     } else if (education < halfScreenPoint) {
    //         addFadeIn('education');
    //     } else if (intro < halfScreenPoint) {
    //         addFadeIn('intro');
    //     }
    // }

    // function addFadeIn(section) {
    //     document.getElementById(section).classList.add('fadeIn')
    // }

    // window.addEventListener("scroll", handleScroll);

    return (
        <div className="wrapper">
            <Hero></Hero>
            <div className="app">
                <Intro></Intro>
                <Education></Education>
                <Skills></Skills>
                <AboutWebsite></AboutWebsite>
                <Projects></Projects>
                {/* <Socials></Socials> */}
                <Contact></Contact>
            </div>
            <Navigation></Navigation>
        </div>
    );
}

export default App;
