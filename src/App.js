import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="wrapper">
            <Navigation></Navigation>
            <Hero></Hero>
            <div className="app">
                <Intro></Intro>
                <Education></Education>
                <Skills></Skills>
                <Contact></Contact>
            </div>
        </div>
    );
}

export default App;
