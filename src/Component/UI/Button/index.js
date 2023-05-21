import React from 'react';
import Button from 'react-bootstrap/Button';
const FlatButton = ({ variant, name, size, icon }) => {
  return (
    <>
      <Button variant={variant} size={size}>
        {name}
        <span className="mx-2">{icon}</span>
      </Button>
    </>
  );
};
export default FlatButton;
