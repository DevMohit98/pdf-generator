import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FlatButton, FormInputs } from '../../../Component/UI';
import { BsPen } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../index.css';
const SignUp = () => {
  return (
    <div className="auth-container">
      <Container className="container">
        <Row>
          <Col lg={12}>
            <h1 className="text-center poppins heading">
              <span className="mx-3">
                <BsPen />
              </span>
              Pdf creater...
            </h1>
          </Col>
          <Col className="mt-3" lg={12}>
            <div className="mt-2">
              <FormInputs labelName="Name" type="text" />
            </div>
            <div className="mt-2">
              <FormInputs labelName="Email Id" type="email" />
            </div>
            <div className="mt-2">
              <FormInputs labelName="Password" type="password" />
            </div>
            <div className="mt-2">
              <FormInputs labelName="Password" type="password" />
            </div>
            <div className="btn-container mt-3">
              <Link to="/" className="poppins">
                Login
              </Link>
              <FlatButton name="Sign Up" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SignUp;
