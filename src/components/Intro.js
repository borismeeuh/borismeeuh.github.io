function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="intro-content">
                <div className="intro-col-left">
                    <h1 className="title">Welcome to my portfolio page!</h1>
                    <p className="paragraph">
                        Hey, I'm Boris Kamstra, a graduate from Hogeschool
                        Zeeland where I studied IT. I've been passionate about
                        frontend development since the start of my education. I
                        have successfully completed my graduation project at{" "}
                        <a
                            href="https://www.xsarus.nl/"
                            target="_blank"
                            className="link"
                        >
                            XSARUS
                        </a>
                        , where I explored the possibilities of turning an
                        existing Order Management System into a Software as a
                        Service product. I'll start my work as a front-end
                        developer at{" "}
                        <a
                            href="https://www.webnl.nl/"
                            target="_blank"
                            className="link"
                        >
                            WebNL
                        </a>{" "}
                        at the beginning of August of 2024.
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
