import React from 'react';
import { MenuItem, DropdownButton } from 'react-bootstrap';

function RenderDropDownButton(props) {
  return (
    <DropdownButton title="Sort By" bsStyle="default" id='sorting'>
      <MenuItem eventKey="1" text="Size" location="#" />
      <MenuItem eventKey="2" text="Price" location="#" />
      <MenuItem eventKey="3" text="Id" location="#" />
    </DropdownButton>
  );
}

  export default RenderDropDownButton;