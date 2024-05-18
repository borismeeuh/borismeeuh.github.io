import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";

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
