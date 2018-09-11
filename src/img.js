import React, { Component } from 'react';

class Img extends Component {
	render() {
		return (
			<div>
				<img src={require('./img/GotgutsImg.png')} alt="download me" className="imgG"/>
			</div>
		);
	}
}

export default Img;
