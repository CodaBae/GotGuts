import React, { Component } from 'react';
import Img from './img';

class AboutUs extends Component {
	render() {
		return (
			<div className="About">
				<div className="AboutD">
					<div className="AboutH">
						<h1 className="AboutHT"> Welcome To GotGuts</h1>
					</div>

					<h1 className="AboutT">
						<p className="AboutP"> We are here to Reduce the rate of poverty...</p>
						<p className="AboutP">
							{' '}
							The Question is are you Living a boring life? Earn money by not being bored... Its Simple!
							Play our DARES To earn MONEY
						</p>
						<p className="AboutP"> GotGuts is an online Daring game</p>
						<p className="AboutP">
							{' '}
							we upload five dares every day for registered users.All our Dares are simple, funny,
							reasonable life dares and they all come with a price tag*{' '}
						</p>
						<p className="AboutP">
							{' '}
							Accept a Dare and upload a video of you accomplishing the Dare. The more Votes you have will
							make you the winner of the day*
						</p>
						<p className="AboutP">
							{' '}
							Be a Registered Member and start playing our dares, register by paying $10, we have 5 day
							free trail...just to prove to you that we are for Real ***Earn cool cash...keep accepting
							dares!***
						</p>
					</h1>
				</div>

				<Img />
			</div>
		);
	}
}

export default AboutUs;
