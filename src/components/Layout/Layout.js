import React, { Component } from 'react';
import * as Moment from 'moment-timezone';
import Aux from '../Aux/Aux';
import Input from '../Input/Input';
import SummaryBox from '../SummaryBox/SummaryBox';
import CardList from '../CardList/CardList';
import './Layout.css';

export class Layout extends Component {
	state = {
		data: [],
		filteredData: [],
		timestamp: ''
	};

	componentDidMount() {
		// fetch data file but never take a cached version
		fetch(this.props.dataURL, {cache: 'no-store'})
			.then(response => response.json())
			.then(data => this.setState({ 
				data: data.alerts.filter(d => d.transitType === 'bus'), // filter out seabus cancellations
				filteredData: data.alerts.filter(d => d.transitType === 'bus'), // filter out seabus cancellations
				timestamp: this.setTimestamp(data.timestamp)
			}));
	}

	setTimestamp(timestamp) {
		return Moment.tz(timestamp, 'America/Vancouver').calendar();
	}

	handleInputChange(event) {
		// const selectedRoute = event.target.value === '' ? this.state.data : this.state.data.filter(d => d.route.includes(event.target.value));
		const selectedRoute = event.target.value === '' ? this.state.data : this.state.data.filter(d => d.route === event.target.value.toUpperCase());

		this.setState({
			filteredData: selectedRoute
		});
	}

	render() {
		let results;
		if (this.state.filteredData.length > 0) {
			results = <CardList data={this.state.filteredData}></CardList>;
		} else {
			results = <p className="no-data">No cancellations</p>;
		}
		return (
			<Aux>
				<h1>Is my bus cancelled?</h1>
				<Input onChange={this.handleInputChange.bind(this)}></Input>
				<SummaryBox data={this.state.data}></SummaryBox>
				{results}
				<footer className="footer">{`Last update: ${this.state.timestamp}`}</footer>
			</Aux>
		);
	}
}

export default Layout;
