import React, { Component } from 'react';
import { Input,Form,TextArea,Icon,Button} from 'semantic-ui-react'
class Contact extends Component {
    render() {
      return (
            
  
        <div className="con">
        <div className='ContactD'>

        <h1 className='ContactT'>Connect With us</h1>
        <h5  className='ContactH'>Nickname</h5>
        <Input placeholder='Nickname' className='ContactI'/>
        <br/>
        <h5 className='ContactH'>phone</h5>
        <Input placeholder='Phone' className='ContactI'/>
        <br/>
        <h5 className='ContactH'>Email</h5>
        <Input iconPosition='right' placeholder='Email' className='ContactI'>
      
        <input />
        </Input>
        <h5 className='ContactHT'>Your ideal dares </h5>
        <Form className='ContactF'>
       
     <TextArea placeholder='Tell us about your Ideal dares' style={{ minHeight: 350 }} />
        </Form>

        <Button animated color='red' size='huge'>
        <Button.Content visible >Send</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' color='white'/>
        </Button.Content>
      </Button>

         <div className='IconD'>
 
         <Icon.Group size='big' className='Icon' >
         <Icon name='facebook' color='blue'/>
       </Icon.Group>
       <Icon.Group size='big'  className='Icon' >
       <Icon name='instagram' color='blue' />
     </Icon.Group>
     <Icon.Group size='big'  className='Icon' >

     <Icon name='twitter' color='blue'  className='Icon'  />
   </Icon.Group >
   <Icon.Group size='big'  className='Icon'>
 
   <Icon name='mail' color='blue'  />
 </Icon.Group>
 <Icon.Group size='big'  className='Icon'>
 <Icon name='pinterest' color='blue'  />
</Icon.Group>
         
          </div>
        
        </div>
             
        </div>
      );
    }
  }
  
  export default Contact;
  