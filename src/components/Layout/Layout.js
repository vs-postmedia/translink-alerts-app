import React, { Component } from 'react';
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
		fetch(this.props.dataURL)
			.then(response => response.json())
			.then(data => this.setState({ 
				data: data.alerts,
				filteredData: data.alerts,
				timestamp: data.timestamp
			}));
	}


	handleInputChange(event) {
		const selectedRoute = event.target.value === '' ? this.state.data : this.state.data.filter(d => d.route.includes(event.target.value));

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

//<h1>Are buses cancelled on my route?</h1>
