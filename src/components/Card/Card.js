import React from 'react';
import './Card.css';

const Card = (props) => {
	const d = props.data;
	
	return (
		<div className="card">
			
			
			<header>
				<h2>{d.route}</h2>
				<p className="type">{d.alertType}</p>
				
			</header>
			<p classname="time">{d.time}</p>
			
			<h4>Details</h4>
			<p className="info">{d.info}</p>
			
		</div>
	);
}

export default Card;



