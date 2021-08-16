import { useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import styled from "@emotion/styled";
import "./Panels.css";

/*
 * data
 */
const hobbies = [
	{
		id: 1,
		title: "Language learning",
		image: "/images/hobbies01.png",
		text: "One of my hobbies is to learn foreign language and interact with people all around the world 🌏. Although It’s hard for me to speak precisely like a native speaker, I’ll still try my best to communicate with foreigners. ",
	},
	{
		id: 2,
		title: "Photography",
		image: "/images/hobbies02.png",
		text: "I am passionate about photography and lately I start to share my works on unsplash.",
	},
	{
		id: 3,
		title: "Internet surfing",
		image: "/images/hobbies03.png",
		text: "I've been always learning new things and finding new ideas through the internet. ",
	},
];

function Slider() {
	const [index, setIndex] = useState(0);
	const { title, image, text } = hobbies[index];

	const checkNumber = (number) => {
		if (number > hobbies.length - 1) {
			return 0;
		}
		if (number < 0) {
			return hobbies.length - 1;
		}
		return number;
	};

	const next = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	const prev = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	return (
		<>
			<Grid>
				<img
					src={process.env.PUBLIC_URL + `${image}`}
					alt={title}
					style={{ alignSelf: "center" }}
				/>
				<p>{text}</p>
			</Grid>
			<Button>
				<button onClick={prev}>
					<FcPrevious />
				</button>
				<button onClick={next}>
					<FcNext />
				</button>
			</Button>
		</>
	);
}

export default Slider;

/*
 * style
 */
const Grid = styled.div`
	max-width: 650px;
	height: 550px;
	display: grid;
	grid-template-rows: 40% auto auto;
	text-align: center;
	padding: 0 0.75rem;
	justify-items: center;
	margin: 0 auto;
`;
const Button = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 50%;
	transform: translateX(-50%);
	margin: 1rem 0;

	button {
		background: none;
		font-size: 1.25rem;
		padding-top: 5px;
		&:hover {
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		}
	}
`;
