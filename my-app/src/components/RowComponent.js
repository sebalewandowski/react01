import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ImageComponent from "./Image";
import Size from './Size';
import Date from './Date';
import Price from "./Price";

  function RowComponent(props) {
   return (
     <Col sm={4} md={2}>
       <ImageComponent src={props.src}/>
       <Size size={props.size}/>
       <Price price={props.price}/>
       <Date date={props.date}/>
     </Col>
   )
  }

  export default RowComponent;