import Responsivity from "../images/Responsive Expample.png";

function About_website() {
    return (
        <div className="about">
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
                            <img src={Responsivity} alt="Responsivity"></img>
                        </div>
                    </div>
                    <div className="about-content-section">
                        <div className="about-content-image">
                            <img src={Responsivity} alt="Responsivity"></img>
                        </div>
                        <div className="about-content-text">
                            <span className="paragraph">
                                This portfolio website was built by yours truly
                                using only React and vanilla CSS. It is fully
                                responsive and, thus, will look good on any
                                device. This project also features a CI/CD
                                pipeline implemented using Github Actions.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_website;
