import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "./Panels.css";

/*
 * data
 */
const worksData = [
	{
		id: 1,
		title: "Product Photographer",
		image: "/images/work01.png",
		text: "I have worked at Antique Art online shop as product photographer from March 2017 to March 2018.",
	},
	{
		id: 2,
		title: "Internship",
		image: "/images/work02.png",
		text: "While I attended language course in Japan, I did an internship at the digital marketing company for six months.",
	},
	{
		id: 3,
		title: "Administrative assistant",
		image: "/images/work03.png",
		text: "After the end of the internship, I started to work as an administrative assistant in the prepress department at the head office.",
	},
	{
		id: 4,
		title: "Front-end Developer",
		image: "/images/work04.png",
		text: "Lately, I’ve been learning JavaScript, Node, React and set my goal to become a front end developer.",
	},
];

function Work() {
	const [works, setWorks] = useState([]);

	useEffect(() => {
		setWorks(worksData);
	}, []);

	return (
		<div className="panel-content">
			{works.map((work) => (
				<div key={work.id} className="panel-item">
					<img
						src={process.env.PUBLIC_URL + `${work.image}`}
						style={icon}
						alt={work.title}
					/>
					<p>{work.text}</p>
				</div>
			))}
			<Button
				target="_blank"
				rel="noreferrer noopener"
				href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:854a0778-2711-4e4d-acf0-76313dd2eb76"
			>
				Read more
			</Button>
		</div>
	);
}

export default Work;

/*
 * style
 */
const icon = {
	width: "80px",
};
const Button = styled.a`
	width: 9rem;
	height: 3rem;
	justify-self: center;
	align-self: flex-end;
	font-size: 1.25rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--light-blue);
	color: #fff;
	border-radius: 5px;
	box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 251, 0.5);
	&:hover {
		box-shadow: inset -4px -4px 6px 0 rgba(255, 255, 251, 0.2),
			inset 3px 3px 6px 0 rgba(0, 0, 0, 0.2);
		background: rgb(170, 200, 210);
		transition: 0.3s;
	}
`;
