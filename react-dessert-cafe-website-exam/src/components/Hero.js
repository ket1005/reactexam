import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Sidebar from './Sidebar';

const Hero = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<div className="container">
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">Yummy and beautiful desserts</h1>
					<p>
					Established in 2012, Eat This Cafe has become a local favorite serving delectable brunches, artisanal sandwiches, specialty salads and daily bottomless mimosas.We thrive in the hustle and bustle of Hollywood's Theatre Row, surrounded by studios, theaters, and sunshine, providing a relaxing respite from a busy day. We're all about adding a special touch to every dish, from our fresh baked bread delivered daily to our homemade potato chips. 
					</p>
					<div className="btn">Order now</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
