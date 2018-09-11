import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

const ImageExampleGroupSize = () => (
	<div className="WD">
		<h1 className="WT">Crazy Dares</h1>

		<Image.Group className="WI">
			<Image src={require('./img/a.jpg')} alt="download me" className="WII" />
			<Image src={require('./img/b.jpg')} alt="download me" className="WII" />
			<Image src={require('./img/c.jpeg')} alt="download me" className="WII" />
		</Image.Group>
		<Divider hidden />
		<Image.Group className="WI">
			<Image src={require('./img/d.jpg')} alt="download me" className="WII" />
			<Image src={require('./img/e.jpg')} alt="download me" className="WII" />
			<Image src={require('./img/j.jpg')} alt="download me" className="WII" />
		</Image.Group>
		<Divider hidden />
		<Image.Group className="WI">
			<Image src={require('./img/g.jpeg')} alt="download me" className="WII" />
			<Image src={require('./img/h.jpg')} alt="download me" className="WII" />
			<Image src={require('./img/h.jpg')} alt="download me" className="WII" />
		</Image.Group>
		<Divider hidden />

		<Image.Group className="WI">
			<Image src={require('./img/l.jpg')} alt="download me" className="WII" />
			<Image src={require('./img/k.jpg')} alt="download me" className="WII" />
			<Image src={require('./img/f.jpg')} alt="download me" className="WII" />
		</Image.Group>
	</div>
);

export default ImageExampleGroupSize;
