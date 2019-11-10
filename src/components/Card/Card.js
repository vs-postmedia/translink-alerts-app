import React from 'react';
import './Card.css';

const Card = (props) => {
	const d = props.data;

	const date = d.time.split('-')
	const day = `${date[1]}. ${date[0]}`;
	const times = d.time.split(' ');
	const time = `${times[1]} ${times[2]} to ${times[5]} ${times[6]}`
	
	return (
		<div className="card">
			<header>
				<h2>{d.route}</h2>
				<p className="type">{d.alertType}</p>
			</header>

			<div className="schedule">
				<div className="date">
					<p className="day"><strong>{day}</strong></p>
					<p className="time">{time}</p>
				</div>
				<div className="update">
					<p><strong>Last update</strong></p>
					<p>about {d.lastUpdate}</p>
				</div>
			</div>
			
			<h4>Details</h4>
			<p className="info">{d.info}</p>
			
		</div>
	);
}

export default Card;



