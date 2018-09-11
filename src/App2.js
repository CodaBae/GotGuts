import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import { Carousel } from 'antd';
import './App.css';
import WatchV from './WatchV';
import Uploads from './Upload';
import Footer from './Footer';
import Timeline1 from './Timeline';

class App2 extends Component {
	render() {
		const TabPane = Tabs.TabPane;

		function callback(key) {
			console.log(key);
		}

		return (
			<div style={{ padding: 10 }}>
				<Tabs defaultActiveKey="2" onChange={callback} type="line" tabPosition="left" className='Tab'>
					<TabPane
						tab={
							<span>
								<Icon type="picture" theme="twoTone" />Explore
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
						<WatchV />

						<div className="footer">
							<h1 className="footerT">GotGuts</h1>
							<Footer />
						</div>
					</TabPane>

					<TabPane
						tab={
							<span>
							<Icon type="dashboard" theme="outlined" />Timeline
							</span>
						}
						key="2"
					>
						<h1 className="GotGuts">GotGuts</h1>
						<Timeline1 />

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
				</Tabs>
			</div>
		);
	}
}
export default App2;
