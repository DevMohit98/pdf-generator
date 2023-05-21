import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FlatButton, FormInputs } from '../../../Component/UI';
import { BsPen } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../index.css';
const Login = () => {
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
          <Col lg={12} className="mt-3">
            <div className="mt-2">
              <FormInputs labelName="Email Id" type="email" />
            </div>
            <div className="mt-2">
              <FormInputs labelName="Password" type="password" />
            </div>
            <div className="btn-container mt-3">
              <Link to="/signup" className="poppins">
                sign up
              </Link>
              <FlatButton name="Login" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
