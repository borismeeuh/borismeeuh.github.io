import background from "../images/Education-background.jpg"
import degree from "../images/svg/degree.svg";
import education from "../images/svg/education-icon.svg";
import globe from "../images/svg/globe-icon.svg";
import travel from "../images/svg/travel-icon.svg";

function Education() {
    return (
        <section className="education" id="education">
            <div className="education-background">
                <img 
                    alt="Office with laptop and paper" 
                    loading="lazy"
                    src={background} 
                />
            </div>
            <div className="education-content">
                <h1 className="title">Education</h1>
                <div className="education-blocks">
                    <div className="education-block-left">
                        <div className="education-block">
                            <div className="education-block-content">
                                <div className="education-block-img">
                                    <img src={degree} alt="Globe" loading="lazy" />
                                </div>
                                <div className="education-block-text paragraph">
                                    Graduated from High School on bilingual VWO
                                    level
                                </div>
                            </div>
                        </div>

                        <div className="education-block">
                            <div className="education-block-content">
                                <div className="education-block-img">
                                    <img src={globe} alt="Degree"  loading="lazy"/>
                                </div>
                                <div className="education-block-text paragraph">
                                    Cambridge FCE certificate and IB diploma
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education-block-right">
                        <div className="education-block">
                            <div className="education-block-content">
                                <div className="education-block-img">
                                    <img src={education} alt="Education" loading="lazy"/>
                                </div>
                                <div className="education-block-text paragraph">
                                    ICT graduate from Hogeschool Zeeland
                                    University of Applied Sciences, Netherlands
                                </div>
                            </div>
                        </div>

                        <div className="education-block">
                            <div className="education-block-content">
                                <div className="education-block-img">
                                    <img src={travel} alt="Travel" loading="lazy" />
                                </div>
                                <div className="education-block-text paragraph">
                                    Minor abroad at Metropolia University of
                                    Applied Sciences in Helsinki, Finland
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
