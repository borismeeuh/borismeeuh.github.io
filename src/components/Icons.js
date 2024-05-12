import html from "../images/logos/html-icon.svg";
import css from "../images/logos/css-icon.svg";
import javaScript from "../images/logos/javascript-icon.svg";
import vue from "../images/logos/vue-icon.svg";
import svelte from "../images/logos/svelte-icon.svg";
import react from "../images/logos/react-icon.svg";
import git from "../images/logos/git-icon.svg";
import typescript from "../images/logos/typescript-icon.svg";
import sass from "../images/logos/sass-icon.svg";

function Icons() {
    return (
        <div className="icons">
            <h2 className="subtitle">What I've worked with</h2>
            <div className="icons-container">
                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#E44D26");
                    }}
                >
                    <img src={html} alt="HTML 5" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#2062AF");
                    }}
                >
                    <img src={css} alt="CSS" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#F7DF1E");
                    }}
                >
                    <img src={javaScript} alt="JavaScript" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#4DBA87");
                    }}
                >
                    <img src={vue} alt="Vue" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#FF3E00");
                    }}
                >
                    <img src={svelte} alt="Svelte" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#00D8FF");
                    }}
                >
                    <img src={react} alt="React" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#F05133");
                    }}
                >
                    <img src={git} alt="Git" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#007ACC");
                    }}
                >
                    <img src={typescript} alt="Typescript" />
                </div>

                <div
                    className="icon"
                    onMouseEnter={() => {
                        setCircleColour("#CF649A");
                    }}
                >
                    <img src={sass} alt="Sass" />
                </div>
            </div>
        </div>
    );

    function setCircleColour(colour) {
        document.documentElement.style.setProperty(`--circleColour`, colour);
    }
}

export default Icons;
