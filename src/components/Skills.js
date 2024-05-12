import Icons from "../components/Icons";
import Experience from "../components/Experience";
import SoftSkills from "../components/SoftSkills";

function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="skills-content">
                <h1 className="title">Experience</h1>
                <div className="skills-cols">
                    <div className="skills-col-left">
                        <Experience></Experience>
                    </div>
                    <div className="skills-col-middle">
                        <Icons></Icons>
                    </div>
                    <div className="skills-col-right">
                        <SoftSkills></SoftSkills>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
