import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import {
	FcContacts,
	FcBusiness,
	FcGraduationCap,
	FcTreeStructure,
	FcLandscape,
} from "react-icons/fc";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import About from "./components/Panel_About";
import Edu from "./components/Panel_Edu";
import Work from "./components/Panel_Work";
import Project from "./components/Panel_Project";
import Hobbies from "./components/Panel_Hobbies";
import "./App.css";
import { motion } from "framer-motion";

function App() {
	const [loading, setLoading] = useState(true);
	const [color, setColor] = useState("var(--light-blue)");
	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	});

	return (
		<>
			{loading ? (
				<PacmanLoader css={loader} color={color} size={50} />
			) : (
				<Tabs className="tabs">
					<div className="panel-list">
						<TabPanel>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={variants}
							>
								<About />
							</motion.div>
						</TabPanel>
						<TabPanel>
							<h2 className="panel-title">Education</h2>
							<Edu />
						</TabPanel>
						<TabPanel>
							<h2 className="panel-title">Work</h2>
							<Work />
						</TabPanel>
						<TabPanel>
							<h2 className="panel-title">Side projects</h2>
							<Project />
						</TabPanel>
						<TabPanel>
							<h2 className="panel-title">Hobbies</h2>
							<Hobbies />
						</TabPanel>
					</div>
					<TabList className="tab-list">
						<Tab className="tab">
							<FcContacts size={31} />
							<span className="tab-txt">About</span>
						</Tab>
						<Tab className="tab">
							<FcGraduationCap size={31} />
							<span className="tab-txt">Education</span>
						</Tab>
						<Tab className="tab">
							<FcBusiness size={31} />
							<span className="tab-txt">Work</span>
						</Tab>
						<Tab className="tab">
							<FcTreeStructure size={31} />
							<span className="tab-txt">Side projects</span>
						</Tab>
						<Tab className="tab">
							<FcLandscape size={31} />
							<span className="tab-txt">Hobbies</span>
						</Tab>
					</TabList>
				</Tabs>
			)}
		</>
	);
}

export default App;

const loader = css`
	display: block;
	margin: 0 auto;
	margin-top: 40vh;
	padding-right: 10rem;
`;
