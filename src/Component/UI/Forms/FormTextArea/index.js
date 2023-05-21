import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const FormTextArea = ({ labelName, textArea, placeholder, style }) => {
  return (
    <>
      <FloatingLabel label={labelName}>
        <Form.Control as={textArea} placeholder={placeholder} style={style} />
      </FloatingLabel>
    </>
  );
};
export default FormTextArea;
