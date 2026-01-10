import checkMark from "../images/svg/check-mark-icon.svg";

function Experience() {
	return (
		<div className="experience">
			<h2 className="subtitle">Professional Experience</h2>
			<div className="experience-list-wrapper">
				<ul className="experience-list">
					<li className="experience-list-item">
						<div>
							<img
								className="experience-checkmark"
								src={checkMark}
								alt="Check"
								loading="lazy"
							/>
						</div>
						<div className="experience-text">
							<span className="paragraph">
								Front-End Developer at{" "}
								<a
									href="https://www.vollan.nl/"
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Vollan
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
								loading="lazy"
							/>
						</div>
						<div className="experience-text">
							<span className="paragraph">
								Junior Front-End Developer at{" "}
								<a
									href="https://www.webnl.nl/"
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
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
								loading="lazy"
							/>
						</div>
						<div className="experience-text">
							<span className="paragraph">
								Intern Front-End Developer at{" "}
								<a
									href="https://www.xsarus.nl/"
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
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
								loading="lazy"
							/>
						</div>
						<div className="experience-text">
							<span className="paragraph">
								Trainee Front-End Developer at{" "}
								<a
									href="https://www.webnl.nl/"
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
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
								loading="lazy"
							/>
						</div>
						<div className="experience-text">
							<span className="paragraph">
								Intern Front-End Developer at
								{" "}
								<a
									href="https://www.webnl.nl/"
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
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
