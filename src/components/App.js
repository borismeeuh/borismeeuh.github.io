import Hero from "./Hero";
import Intro from "./Intro";
import Skills from "./Skills";
import Navigation from "./Navigation";
import Education from "./Education";
import Contact from "./Contact";

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
