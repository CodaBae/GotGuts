import React, { Component } from 'react';
import {  TextArea, Icon, Button } from 'semantic-ui-react';
class Contact extends Component {
	render() {
		return (
			<div className="Home">
				
					<form className="">
					<h1 className="ContactT">Connect With us</h1>
					<div className="ContactD">
					<div className="ContactD1">
				
					<h5 className="ContactH">Nickname</h5>
					<input placeholder="Nickname" className="ContactI" />
					<br />
					<h5 className="ContactH">phone</h5>
					<input placeholder="Phone" className="ContactI" />
					<br />
					<h5 className="ContactH">Email</h5>
					<input iconPosition="right" placeholder="Email" className="ContactI"  />
				
					
					<h5 className="ContactHT">Your ideal dares </h5>
					</div>
						<TextArea placeholder="Tell us about your Ideal dares" style={{minHeight: 560,
							width: 500,
							background: 'transparent',
							border: '1px solid #056ecf',
							padding:5
						}} />
				
						</div>
						<div className='BigRedButton'>
					<Button animated color="red" size="huge">
						<Button.Content visible>Connect</Button.Content>
						<Button.Content hidden>
							<Icon name="arrow right" color="white" />
						</Button.Content>
					</Button>
					</div>
						</form>

					<div className="IconD">
						<Icon.Group size="big" className="Icon">
							<Icon name="facebook" color="blue" />
						</Icon.Group>
						<Icon.Group size="big" className="Icon">
							<Icon name="instagram" color="red" />
						</Icon.Group>
						<Icon.Group size="big" className="Icon">
							<Icon name="twitter" color="blue" className="Icon" />
						</Icon.Group>
						<Icon.Group size="big" className="Icon">
							<Icon name="mail" color="red" />
						</Icon.Group>
						<Icon.Group size="big" className="Icon">
							<Icon name="pinterest" color="blue" />
						</Icon.Group>
					</div>
			
			</div>
		);
	}
}

export default Contact;
