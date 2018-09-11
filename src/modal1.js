import React, { Component } from 'react'
import { Input,Header, Icon, Modal,Button } from 'semantic-ui-react'


export default class ModalExampleControlled1 extends Component {
  state = { modalOpen: false,
            fields: {},
            errors: {},
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  

  render() {
    return (

<Modal
trigger={ 

<button className="buttonL" onClick={this.handleOpen}>Log In</button>

}
open={this.state.modalOpen}
onClose={this.handleClose}
basic
size='small'
>

<Header  />
<Modal.Content>
<h1 className='modal'> Log In </h1>

<div className='ContactDM'>
<form>
<h5  className='ContactH'>Nickname</h5>
<Input placeholder='Nickname' className='ContactIM' required/>
<br/>
<h5 className='ContactH'>Password</h5>
<Input placeholder='Phone' className='ContactIM' required/>   
 <br/>
 <Button color='black' onClick={this.handleClose} inverted>
 <Icon name='checkmark' /> Submit!
</Button>
</form>

</div>
</Modal.Content>
<Modal.Actions>
  <Button color='green' onClick={this.handleClose} inverted>
    <Icon name='checkmark' /> Done!
  </Button>
</Modal.Actions>
</Modal>
)
}
}