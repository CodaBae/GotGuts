import React, { Component } from 'react'
import { Carousel } from 'antd';
import {Input } from 'antd'
import {  Icon, Button } from 'semantic-ui-react';

export default class Login extends Component {

  render() {
    return (
      
      <div className='LoginD'>
    

      <div className='LoginC1'>
    	<Carousel autoplay>
						
							<div>
								{' '}
								<img src={require('./img/c3.jpg')} alt="download me" className="img" />
							</div>
							<div>
								{' '}
								<img src={require('./img/c2.jpg')} alt="download me" className="img" />
							</div>
						
						</Carousel>

      </div>


      <div className='LoginC2'>
    <h1 className='LoginH'>LogIn User!</h1>

    <div className='InputD'>
    <form>
    <h5  className='ContactHL'>Nickname</h5>
    <Input placeholder='Nickname' className='InputL' required/>
    <br/>
    <h5 className='ContactHL'>Password</h5>
    <Input placeholder='Password' className='InputL' required label='Password'/>   
     <br/>
   
     <Button animated color="red" size="huge" classname='Big_red_button'>
     <Button.Content visible>Ride On </Button.Content>
     <Button.Content hidden>
       <Icon name="arrow right" color="white" />
     </Button.Content>
   </Button>

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
   
    </form>
    
    </div>
      </div>

      </div>

)
}
}