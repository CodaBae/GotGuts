import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="IconDF">
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
        <p className='Copyright'>2018 Codabae &copy;</p>
			</div>
		);
	}
}

export default Footer;
