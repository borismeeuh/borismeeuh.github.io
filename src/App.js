import About_website from "./components/About_website"
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

function App() {
    return (
        <div className="wrapper">
            <Navigation></Navigation>
            <Hero></Hero>
            <div className="app">
                <Intro></Intro>
                <Education></Education>
                <Skills></Skills>
                <About_website></About_website>
                <Projects></Projects>
                {/* <Socials></Socials> */}
                <Contact></Contact>
            </div>
        </div>
    );
}

export default App;
