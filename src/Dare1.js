import React, { Component } from 'react';
import { Modal, Card } from 'antd';

const { Meta } = Card;
class Dare1 extends Component {
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
			<div className="Dare1">
				<div>
					<Card
						hoverable
						style={{ width: 700, margin: 40 }}
						cover={<img src={require('./img/Ca.jpg')} alt="download me" className="Hi" />}
						onClick={this.showModal}
					>
						<Meta
							title="Hey Ladies"
							description="WE DARE YOU TO LET YOUR BROTHER DO YOUR MAKEUP AND TAKE IT OUT TO A DATE 😝😝😝"
						/>
					</Card>

					<Modal
						title="Welcome User"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						<div>
							<img src={require('./img/Ca.jpg')} alt="download me" className="Hi" />
							<h1>Hey Ladies</h1>
							<p>
								Yes! take a seat and let you brother do your make up... thats easy right?...wait for
								it...
							</p>
							👇
							<p>call your cursh and ask him out on a date for tonight!</p>
							<h5>
								WE DARE YOU TO LET YOUR BROTHER DO YOUR MAKEUP AND TAKE IT OUT TO A DATE WITH YOUR CRUSH😝
							
							</h5>
						</div>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Dare1;
