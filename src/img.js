import React, { Component } from 'react';


class Img extends Component {
    
    render() {
       
      return (
        <div className="imgG">

        <img src={require('./img/GotgutsImg.png')} alt='download me' />
       
       
        </div>
      );
    }
  }
  
  export default Img;
  