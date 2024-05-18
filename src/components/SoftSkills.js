import checkMark from "../images/svg/check-mark-icon.svg";

function SoftSkills() {
    return (
        <div className="softSkills">
            <h2 className="subtitle">Soft Skills</h2>
            <ul className="softSkills-list">
                <li className="softSkills-list-item">
                    <div>
                        <img
                            className="experience-checkmark"
                            src={checkMark}
                            alt="Check"
                        />
                    </div>
                    <div className="experience-text">
                        <div className="paragraph">
                            Great communication and presentation skills in Dutch
                            and English, both spoken and written
                        </div>
                    </div>
                </li>
                <li className="softSkills-list-item">
                    <div>
                        <img
                            className="experience-checkmark"
                            src={checkMark}
                            alt="Check"
                        />
                    </div>
                    <div className="experience-text">
                        <div className="paragraph">
                            Strong work ethic and critical thinker
                        </div>
                    </div>
                </li>
                <li className="softSkills-list-item">
                    <div>
                        <img
                            className="experience-checkmark"
                            src={checkMark}
                            alt="Check"
                        />
                    </div>
                    <div className="experience-text">
                        <div className="paragraph">Always open to learn</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SoftSkills;
