import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormControl from '../FormControl';
const FormInputs = ({ labelName, type }) => {
  return (
    <>
      <FloatingLabel label={labelName} className="poppins">
        <FormControl type={type} />
      </FloatingLabel>
    </>
  );
};
export default FormInputs;
