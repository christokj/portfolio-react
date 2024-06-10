import React from 'react';
import bg_img from '../Pages/Images/signup_bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupPage.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function SignupPage() {

  const navigate = useNavigate();

  const handleSignupSubmit = (values) => {
    navigate('/Login', { state: values });
  }
  var bgStyle = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${bg_img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '5%',

  }
  const { Formik } = formik;
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter Fullname").min(3, "Fullname should have minimum 3 characters!!"),
    email: yup.string().required("Please enter email").matches(/\S+@\S+\.\S+/, "Please enter valid email"),
    password: yup.string().required("Please enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password should contain minimum  8 characters, a small letter and a capital letter"),
    confirmPassword: yup.string().required("Please enter password again").oneOf([yup.ref('password'), null], "Must match with password"),
  });

  return (
    <>
      <div style={bgStyle} >
        <Container fluid className='container d-flex align-items-center justify-content-center'>
          <Row className=' form_container ' >
            <Col md={6} className='mb- ps-5 pe-5 shadow p-4 rounded-3 '>
              <Formik
                validationSchema={schema}
                onSubmit={handleSignupSubmit}
                initialValues={{
                  fullName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',

                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row >
                      <h2 className='text-secondary container d-flex align-items-center justify-content-center'>
                        Sign Up
                      </h2>
                      <Form.Group
                        controlId="validationFormik01"
                        className='position-relative'
                      >
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          placeholder='Fullname'
                          defaultValue={values.fullName}
                          onChange={handleChange}
                          isInvalid={!!errors.fullName}
                        />
                        <Form.Control.Feedback type='invalid' tooltip>
                          {errors.fullName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        controlId="validationFormik02"
                        className='position-relative'
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type='invalid' tooltip>
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        className='position-relative'
                        controlId="validationFormikUsername"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          aria-describedby="inputGroupPrepend"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-5">
                      <Form.Group
                        className='position-relative'
                        controlId="validationFormik03">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          isInvalid={!!errors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <div className="d-grid gap-2">
                      <Button variant="secondary" size="sm" type="submit">Sign up</Button>
                    </div>
                  </Form>
                )}
              </Formik>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}


export default SignupPage;
