import React, { Component } from 'react';

class ImgH extends Component {
	render() {
		return (
			<div className="imgH">
				<img src={require('./img/m.png')} alt="download me" className="Hi" />
			</div>
		);
	}
}

export default ImgH;
