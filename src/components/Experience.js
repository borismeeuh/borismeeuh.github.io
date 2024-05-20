import checkMark from "../images/svg/check-mark-icon.svg";

function Experience() {
    return (
        <div className="experience">
            <h2 className="subtitle">Development experience</h2>
            <div className="experience-list-wrapper">
                <ul className="experience-list">
                    <li className="experience-list-item">
                        <div>
                            <img
                                className="experience-checkmark"
                                src={checkMark}
                                alt="Check"
                            />
                        </div>
                        <div className="experience-text">
                            <span className="paragraph">
                                Intern Front-End Developer at
                            </span>
                            <span className="paragraph">
                                <a href="https://www.xsarus.nl/" className="link" target="_blank">
                                    XSARUS
                                </a>
                            </span>
                        </div>
                    </li>
                    <li className="experience-list-item">
                        <div>
                            <img
                                className="experience-checkmark"
                                src={checkMark}
                                alt="Check"
                            />
                        </div>
                        <div className="experience-text">
                            <span className="paragraph">
                                Trainee Front-End Developer at
                            </span>
                            <span className="paragraph">
                                <a href="https://www.webnl.nl/" className="link" target="_blank">
                                    WebNL
                                </a>
                            </span>
                        </div>
                    </li>
                    <li className="experience-list-item">
                        <div>
                            <img
                                className="experience-checkmark"
                                src={checkMark}
                                alt="Check"
                            />
                        </div>
                        <div className="experience-text">
                            <span className="paragraph">
                                Intern Front-End Developer at
                            </span>
                            <span className="paragraph">
                                {" "}
                                <a href="https://www.webnl.nl/" className="link" target="_blank">
                                    WebNL
                                </a>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;
