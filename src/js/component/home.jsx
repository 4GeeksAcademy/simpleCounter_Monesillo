import { useState, useEffect } from "react";
import React from "react";


//create your first component
const Counter = () => {
	const [counterDigits, setCounterDigits] = useState(Array(6).fill(0));
  
	useEffect(() => {
	  const incrementCounter = (digits) => {
		const updatedDigits = [...digits];
		for (let i = updatedDigits.length - 1; i >= 0; i--) {
		  if (updatedDigits[i] === 9) {
			updatedDigits[i] = 0;
		  } else {
			updatedDigits[i]++;
			break;
		  }
		}
		return updatedDigits;
	  };

	  const interval = setInterval(() => {
		setCounterDigits(prevDigits => incrementCounter(prevDigits));
	  }, 1000);
  
	  return () => clearInterval(interval);
	}, []);
  
	return (
	  <div className="counter">
		<div className="cell">
		  <span role="img" aria-label="clock">
			<i className="fa-regular fa-clock"></i>
		  </span>
		</div>
		{counterDigits.map((digit, index) => (
		  <div key={index} className="cell">{digit}</div>
		))}
	  </div>
	);
  };
  
  export default Counter;
