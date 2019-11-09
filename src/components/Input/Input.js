import React, { Component } from 'react';
import Aux from '../Aux/Aux';

export class Input extends Component {
	state = {value: 'Enter a bus number...'};

	render() {
		return (
			<Aux>
				<label id="input">
					<input type="text" placeholder={this.state.value} onChange={this.props.onChange}/>
				</label>
			</Aux>
		)
	}
	
}

export default Input;