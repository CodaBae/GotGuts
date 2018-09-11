import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
			<div className="buttonD">
				<div className="button">
					<button className="buttonS"> Sign Up </button>
					<button className="buttonL">Log In</button>
				</div>
			</div>
		);
	}
}

export default Button;
