import React from 'react';
import { Image } from 'react-bootstrap';

  function ImageComponent(props) {
    return (
      <span className='face' style={{fontSize:props.size}}>{props.src}</span>
      // <Image href="#" alt="something" src={props.src} thumbnail responsive/>
    );
  }


  export default ImageComponent;