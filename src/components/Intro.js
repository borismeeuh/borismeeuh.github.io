import pfp from "../images/IntroProfileImg.jpeg";

function Intro() {
	return (
		<section className="intro" id="intro">
			<div className="intro-content">
				<div className="intro-col-left">
					<h1 className="title">Welcome to my portfolio page!</h1>
					<p className="paragraph">
						Hey, I'm Boris, a graduate from Hogeschool Zeeland where
						I studied IT. I've been passionate about frontend
						development since the start of my education. I have
						successfully completed my graduation project at{" "}
						<a
							href="https://www.xsarus.nl/"
							target="_blank"
							className="link"
							rel="noreferrer"
						>
							XSARUS
						</a>
						, where I explored the possibilities of turning an
						existing Order Management System into a Software as a
						Service product. I have started my work as a junior
						front-end developer at{" "}
						<a
							href="https://www.webnl.nl/"
							target="_blank"
							className="link"
							rel="noreferrer"
						>
							WebNL
						</a>{" "}
						at the start of August of 2024. Since the beginning of
						September of 2025, I've been working as a front-end
						developer at {" "}
						<a
							href="https://www.vollan.nl/"
							className="link"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vollan
						</a>
						.
					</p>
				</div>
				<div className="intro-col-right">
					<img
						className="intro-img"
						src={pfp}
						alt="Profile"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}

export default Intro;
