import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ImageComponent from './Image';
import Size from './Size';
import Date from './Date';
import Price from './Price';


  function GridComponent(props) {
    return (
     <div className='col-sm-6 col-md-4 col-lg-2 rounded float-left'>
          <ImageComponent size={props.size} src={props.src}/>
          <Size size={props.size}/>
          <Price price={props.price}/>
          <Date date={props.date}/>
     </div>
    );
  }

export default GridComponent;