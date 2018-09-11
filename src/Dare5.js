import React, {Component} from 'react';
import { Modal, Card } from 'antd';

const { Meta } = Card;
class Dare5 extends Component {
	state = { visible: false };

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};
	render() {
		return (
			<div className="Dare5">
			
				<div>
					<Card
						hoverable
						style={{ width: 700, margin: 40 }}
						cover={<img src={require('./img/Ca.jpg')} alt="download me" className="Hi" />}
						onClick={this.showModal}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>

					<Modal
						title="Welcome User"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>

						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Dare5;
