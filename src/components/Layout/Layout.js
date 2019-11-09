import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Tabletop from 'tabletop';
import Input from '../Input/Input';
import CardList from '../CardList/CardList';
import './Layout.css';

export class Layout extends Component {
	state = {
		data: [],
		filteredData: []
	};

	componentDidMount() {
		// load data from Google sheet
		Tabletop.init({
			key: this.props.sheet,
			callback: (data, tabletop) => {
				this.setState({
					data: data,
					filteredData: data
				});
			},
			simpleSheet: true
		});
	}


	handleInputChange(event) {
		const selectedRoute = this.state.data.filter(d => d.route === event.target.value);

		this.setState({
			filteredData: selectedRoute
		});
	}

	render() {
		let results;
		if (this.state.filteredData.length > 0) {
			results = <CardList data={this.state.filteredData}></CardList>;
		} else {
			results = <p>No cancellations</p>;
		}
		return (
			<Aux>
				<h1>Are buses cancelled on my route?</h1>
				<Input onChange={this.handleInputChange.bind(this)}></Input>
				{results}
			</Aux>
		);
	}
}

export default Layout;
