function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="intro-content">
                <div className="intro-col-left">
                    <h1 className="title">Welcome to my portfolio page!</h1>
                    <p className="paragraph">
                        I"m Boris Kamstra, a fourth year IT student at the Hogeschool Zeeland
                        in the Netherlands. I've been passionate about frontend development since
                        the start of my education. Currently, I'm doing my graduation internship
                        at <a href="https://www.xsarus.nl/" target="_blank" className="link">XSARUS</a> where I'm exploring the possibilities
                        of turning an OMS into a SaaS product. 
                    </p>
                </div>
                <div className="intro-col-right">
                    <div className="intro-img"></div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
