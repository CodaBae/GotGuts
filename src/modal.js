import React, { Component, } from 'react'
import { Header, Icon, Modal,Button,Input, } from 'semantic-ui-react';
import ModalExampleControlled1 from './modal1'
import Axios from 'axios';


export default class ModalExampleControlled extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      modalOpen: false,
        fields: {},
        errors: {}
    }
 }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
       }        
    }


    //phone
    if(!fields["phone"]){
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if(typeof fields["phone"] !== "undefined"){
      if(fields["phone"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["phone"] = "Only numbers";
      }      	
    }


    //Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }  

   this.setState({errors: errors});
   return formIsValid;
}

contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
    }

}

handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
}

  submit = () => {
    Axios({
      method:'post',
      url: 'http://local:5000/saveinfo',
      data: {

     },
    
    }).then(res => {
      console.log(res)
    })
   
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
        <div>
      <Modal
        trigger={ <button className="buttonS" onClick={this.handleOpen} > Sign Up </button> }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'>
      
        <Header  /> 
        <Modal.Content >
            <div className='ContactDM'>  	
       
      <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>

      <h1 className='modal'> Sign Up </h1>

    

       <h1 className='SignupT'>Personal Details</h1>
      <h5  className='ContactH'>Nickname</h5>
      <Input  refs="name"  placeholder='Nickname' className='ContactIM' required onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
     

      />
      <span className="error">{this.state.errors["name"]}</span>

      <br/>
      <h5 className='ContactH'>phone</h5>
      <Input  refs="phone"  placeholder='Phone' className='ContactIM' required onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}

      />   
      <span className="error">{this.state.errors["phone"]}</span>
       <br/>
       <h5 className='ContactH'>email</h5>
     
       <Input  refs="email"  placeholder='Email' className='ContactIM'required onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}

         />   
       <span className="error">{this.state.errors["email"]}</span>
        <br/>
      <h5 className='ContactH'>Password</h5>
      <Input placeholder='Password' className='ContactIM' required/>
      <br/>
      <h1 className='SignupT'>Account Details</h1>
      <h5 className='ContactH'>Account Number</h5>
      <Input placeholder='Account Number' className='ContactIM' required/>
      <br/>
      <h5 className='ContactH'>Bank Details</h5>
      <Input placeholder='Bank Details' className='ContactIM' required/>

      <Button color='black' inverted value="Submit" onClick={this.submit}>
      <Icon name='checkmark' /> Submit!
    </Button>
      
    </form>
        </div>

 

        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted  value="Submit" onClick={this.handleClose}>
            <Icon name='checkmark' /> Done!
          </Button>
        </Modal.Actions>
      </Modal>
    
      <ModalExampleControlled1 />

   
    </div>
    )
  }
}