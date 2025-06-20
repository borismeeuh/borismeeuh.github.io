import Responsivity from "../images/Responsive Expample.png";
import LighthouseReport from "../images/Lighthouse Report.png";

function About_website() {
    return (
        <div className="about" id="about">
            <div className="about-wrapper">
                <h1 className="title">About This Website</h1>
                <div className="about-content">
                    <div className="about-content-section">
                        <div className="about-content-text">
                            <span className="paragraph">
                                This portfolio website was built by yours truly
                                using only React and vanilla CSS. It is fully
                                responsive and, thus, will look good on any
                                device. This project also features a CI/CD
                                pipeline implemented using Github Actions.
                            </span>
                        </div>
                        <div className="about-content-image">
                            <img
                                src={Responsivity}
                                alt="Mockup of the site on different screen sizes"
                                loading="lazy"
                            ></img>
                        </div>
                    </div>
                    <div className="about-content-section">
                        <div className="about-content-image">
                            <img
                                src={LighthouseReport}
                                alt="Perfect score in Google Lighthouse"
                                loading="lazy"
                            ></img>
                        </div>
                        <div className="about-content-text">
                            <span className="paragraph">
                                The JavaScript and CSS for this website have been
                                minimised, significantly reducing the final
                                JavaScript bundle in size. The images have been
                                compressed and are lazy-loaded. This resulted in a
                                perfect score in Google's Lighthouse Report,
                                demonstrating my dedication to creating high
                                quality web apps.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_website;
