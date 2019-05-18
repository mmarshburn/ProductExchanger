//The Jumbotron component info
import React from "react";
import "./Jumbotron.css";

// const Jumbotron = () => (
// 	<header class = "header">
// 		<h1>Hockey Gear & Equipment!</h1>
// 		<h2>Click on an individual product to select your item.</h2>
// 	</header>
// );


function Jumbotron({ children }) {
	return (
	  <div
		style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
		className="jumbotron"
	  >
		{children}
	  </div>
	);
  }

export default Jumbotron;
