import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Warning extends Component {
	render() {
		return (
			<div className="Home">
				<h1>404 PAGE NOT FOUND</h1>
				<Link to="/">
					<button> Take Me Home </button>
				</Link>
			</div>
		);
	}
}

export default Warning;
