import React, { useState, useEffect } from "react";
import "./Panels.css";

/*
 * data
 */
const edusData = [
	{
		id: 1,
		title: "Bachelor",
		image: "/images/edu01.png",
		text: "I graduated from National Chi Nan University with Bachelor of Foreign Language and Literature in 2016.",
	},
	{
		id: 2,
		title: "Language course",
		image: "/images/edu02.png",
		text: "I took language course in Fukuoka, Japan from April 2018 to February 2019.",
	},
	{
		id: 3,
		title: "Programming",
		image: "/images/edu03.png",
		text: "Recently I've started to learn Programming by online resources like Hex School, Udemy, The Odin Project, Javascript.info, MDN, W3Schools, etc.",
	},
];

function Edu() {
	const [edus, setEdus] = useState([]);

	useEffect(() => {
		setEdus(edusData);
	}, []);

	return (
		<div className="panel-content">
			{edus.map((edu) => (
				<div key={edu.id} className="panel-item">
					<img
						src={process.env.PUBLIC_URL + `${edu.image}`}
						style={icon}
						alt={edu.title}
					/>
					<p>{edu.text}</p>
				</div>
			))}
		</div>
	);
}

export default Edu;

/*
 * style
 */
const icon = {
	width: "80px",
};
