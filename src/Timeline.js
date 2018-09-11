import React from 'react';
import Dare1 from './Dare1';
import Dare2 from './Dare2';
import Dare3 from './Dare3';
import Dare4 from './Dare4';
import Dare5 from './Dare5';
import {Timeline} from 'antd';

export default class Timeline1 extends React.Component {
	render() {
		return (
			<div className="Timeline">
				<div className="TimelineC1">
					<Timeline>
						<Timeline.Item color="green">
						
							<Dare1 />
						</Timeline.Item>
						<Timeline.Item>
				
							<Dare2 />
						</Timeline.Item>
						<Timeline.Item color="red">
							<Dare3 />
						</Timeline.Item>
						<Timeline.Item >
							<Dare4 />
						</Timeline.Item>
						<Timeline.Item color="red">
							<Dare5 />
						</Timeline.Item>
					</Timeline>
				</div>

				<div className="TimelineC2">
					<h1 className="TimelineCT">Place Your Ads</h1>
				</div>
			</div>
		);
	}
}
