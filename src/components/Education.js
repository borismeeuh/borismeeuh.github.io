import globe from "../images/svg/globe-icon.svg";
import degree from "../images/svg/degree.svg";
import education from "../images/svg/education-icon.svg";
import travel from "../images/svg/travel-icon.svg";

function Education() {
    return (
        <div className="education" id="education">
            <div className="education-content">
                <h1 className="title">Education</h1>
                <div className="education-blocks">
                    <div className="education-block-left">
                        <div className="education-block">
                            <div className="education-block-content">
                                <div className="education-block-img">
                                    <img src={degree} alt="Globe" />
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
                                    <img src={globe} alt="Globe" />
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
                                    <img src={education} alt="Globe" />
                                </div>
                                <div className="education-block-text paragraph">
                                    Studying ICT at Hogeschool Zeeland
                                    University of Applied Sciences, Netherlands
                                </div>
                            </div>
                        </div>

                        <div className="education-block">
                            <div className="education-block-content">
                                <div className="education-block-img">
                                    <img src={travel} alt="Globe" />
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
        </div>
    );
}

export default Education;
