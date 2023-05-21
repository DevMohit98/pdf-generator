import React from 'react';
import Form from 'react-bootstrap/Form';
const FormControl = ({ type }) => {
  return <Form.Control type={type} placeholder={type} className="poppins" />;
};
export default FormControl;
