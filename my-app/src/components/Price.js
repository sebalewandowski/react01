import React from 'react';
import Currency from 'react-currency-formatter';

  function Price(props) {
    return (
      <p>Price:
        <Currency quantity={props.price} currency="USD" decimal="."/>
      </p>
    );
  }

  export default Price;