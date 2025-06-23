import AboutWebsite from "./components/About_website";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="wrapper">
            <Hero></Hero>
            <Navigation></Navigation>
            <div className="app">
                <Intro></Intro>
                <Education></Education>
                <Skills></Skills>
                <AboutWebsite></AboutWebsite>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </div>
    );
}

export default App;
