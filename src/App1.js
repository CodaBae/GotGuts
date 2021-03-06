import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import { Carousel } from 'antd';
import './App.css';
import AboutUs from './AboutUs';
import Button from './Button';
import WatchV from './WatchV';
import Contact from './contact';
import ModalExampleControlled from './modal';
import ModalExampleControlled1 from './modal1';
import Uploads from './Upload';
import Footer from './Footer';
import Login from './Login';

class App extends Component {
	render() {
		const TabPane = Tabs.TabPane;

		function callback(key) {
			console.log(key);
		}

		return (
			<div className="App">
				<Tabs defaultActiveKey="1" onChange={callback} type="line" tabPosition="top-right">
					<TabPane
						tab={
							<span>
								<Icon type="home" theme="twoTone" />Know Us
							</span>
						}
						key="1"
					>
						<h1 className="GotGuts">GotGuts</h1>

						<Carousel autoplay>
							<div>
								{' '}
								<img src={require('./img/m.jpg')} alt="download me" className="img" />{' '}
							</div>
							<div>
								{' '}
								<img src={require('./img/c1.jpg')} alt="download me" className="img" />
							</div>
							<div>
								{' '}
								<img src={require('./img/c3.jpg')} alt="download me" className="img" />
							</div>
							<div>
								{' '}
								<img src={require('./img/c2.jpg')} alt="download me" className="img" />
							</div>
							<div>
								{' '}
								<img src={require('./img/c4.jpg')} alt="download me" className="img" />
							</div>
						</Carousel>

						<AboutUs />
						<ModalExampleControlled />

						<div className="footer">
							<h1 className="footerT">GotGuts</h1>

							<Footer />
						</div>
					</TabPane>

					<TabPane
						tab={
							<span>
								<Icon type="picture" theme="twoTone" />Explore
							</span>
						}
						key="2"
					>
						<h1 className="GotGuts">GotGuts</h1>

						<Carousel autoplay>
							<div>
								{' '}
								<img src={require('./img/m.jpg')} alt="download me" className="img" />{' '}
							</div>
							<div>
								{' '}
								<img src={require('./img/c1.jpg')} alt="download me" className="img" />
							</div>
							<div>
								{' '}
								<img src={require('./img/c3.jpg')} alt="download me" className="img" />
							</div>
							<div>
								{' '}
								<img src={require('./img/c2.jpg')} alt="download me" className="img" />
							</div>
							<div>
								{' '}
								<img src={require('./img/c4.jpg')} alt="download me" className="img" />
							</div>
						</Carousel>
						<WatchV />
						<ModalExampleControlled />
						<div className="footer">
							<h1 className="footerT">GotGuts</h1>
							<Footer />
						</div>
					</TabPane>

					<TabPane
						tab={
							<span>
								<Icon type="upload" theme="outlined" />Uploads
							</span>
						}
						key="3"
					>
						<h1 className="GotGuts">GotGuts</h1>

						<Uploads />

						<div className="footer">
							<h1 className="footerT">GotGuts</h1>
							<Footer />
						</div>
					</TabPane>

					<TabPane
						tab={
							<span>
								<Icon type="contacts" theme="twoTone" />Connect
							</span>
						}
						key="5"
					>
						<h1 className="GotGuts">GotGuts</h1>

						<Contact />
					</TabPane>

					<TabPane
						tab={
							<span>
								<Icon type="user" theme="outlined" />
								Check In
							</span>
						}
						key="4"
					>
						<Login />
					</TabPane>
				</Tabs>
			</div>
		);
	}
}
export default App;
