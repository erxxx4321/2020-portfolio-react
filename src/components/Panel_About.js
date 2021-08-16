import styled from "@emotion/styled";

function About() {
	return (
		<>
			<Content>
				<Img>
					<img
						src={process.env.PUBLIC_URL + "/images/about01.png"}
						alt="profile"
						style={{ borderRadius: "50%" }}
					/>
				</Img>
				<Intro>
					<h2>Kaori</h2>
					<h3>Taipei, Taiwan</h3>
					<p>Machine-learning Enthusiast | Trilingual 🌏</p>
				</Intro>
			</Content>
			<Links>
				<a href="https://unsplash.com/@erxxx4321">
					<img
						src={
							process.env.PUBLIC_URL + "/images/link-unsplash.svg"
						}
						alt="Unsplash"
					/>
					Unsplash
				</a>
				<a href="https://github.com/erxxx4321">
					<img
						src={process.env.PUBLIC_URL + "/images/link-github.svg"}
						alt="Github"
					/>
					Github
				</a>
				<a href="https://codepen.io/erxxx4321">
					<img
						src={
							process.env.PUBLIC_URL + "/images/link-codepen.svg"
						}
						alt="Codepen"
					/>
					Codepen
				</a>
			</Links>
		</>
	);
}

export default About;

/*
 * style
 */

const Content = styled.div`
	height: 670px;
	display: grid;
	grid-template-rows: 40% auto;
	grid-gap: 1rem;
	gap: 1rem;
	margin: 1.5rem auto 0;
	justify-items: center;

	@media (max-width: 576px) {
		height: 570px;
	}
`;
const Img = styled.div`
	width: 220px;
	border: 1px solid #000;
	border-radius: 50%;
	align-self: end;

	@media (max-width: 768px) {
		width: 200px;
	}
`;
const Intro = styled.div`
	color: var(--ink-black);
	text-align: center;
	line-height: 1.6;
	h2 {
		font-size: 2.5rem;
		font-weight: bold;
	}
	p {
		padding: 1.5rem 1rem;
	}
`;
const Links = styled.div`
	position: absolute;
	width: 320px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	margin: 0 auto;
	padding: 0.5rem 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);

	a {
		color: #000;
		&:hover {
			color: var(--ink-black);
		}
		img {
			width: 1.125rem;
			margin: 0 5px -1.5px;
		}
	}
`;
