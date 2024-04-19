import bg_img from '../Components/Images/signup_bg.jpg';
import React, { useEffect, useState } from 'react'
import "./LoginPage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {useLocation} from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { useNavigate} from 'react-router-dom';

function LoginPage() {

  var bgStyle={
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${bg_img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '5%'
  }
  const [name,setName] =useState('');
  const [password,setPassword] = useState('');

  const location = useLocation();
      useEffect(()=>{
        setName(location.state.fullName);
        setPassword(location.state.password);
      },[location.state.fullName, location.state.password]);
     

      const { Formik } = formik;
      const schema = yup.object().shape({
       fullName: yup.string().required("Please enter Fullname").oneOf([name], "Invalid name"),
       password: yup.string().required("Please enter password").oneOf([password], "Invalid password" )
       
      });

      const navigate = useNavigate();
      const handleSignupSubmit = ()=>{
        navigate('/Home');
     }

  return (
    <>
        <div style={bgStyle} className=''>
          <Container fluid className='container d-flex align-items-center justify-content-center'>
            <Row className=' form_container ' >
              <Col md={6} className=' ps-5 pe-5 shadow p-4'>
                <Formik
                  validationSchema={schema}
                  onSubmit={handleSignupSubmit}
                  initialValues={{
                  fullName: '',
                  password: '',
                  }}
                >

                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}  className="mt-3">
                    <Row >
                      <h2 className='text-secondary d-flex align-items-center justify-content-center'>
                        Login
                      </h2>
                      <Form.Group
                        controlId="validationFormik01"
                        className='position-relative'
                      >
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control
                          type="text"
                          size='sm'
                          placeholder="Fullname"
                          name="fullName"
                          defaultValue={values.fullName}
                          onChange={handleChange}
                          isInvalid={!!errors.fullName}
                        />
                        <Form.Control.Feedback type='invalid' tooltip>
                          {errors.fullName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className='mt-4'>
                      <Form.Group 
                        controlId="validationFormikUsername"
                        className='position-relative' 
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="text"
                          size='sm'
                          placeholder="Password" 
                          name="password"
                          defaultValue={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button type="submit" className='mt-4 mb-4 w-25 container d-flex align-items-center justify-content-center text-center' size="sm" variant="secondary">Log in</Button>
                    <h6 className='d-flex justify-content-center '>Don't have an account?<Nav.Link as={Link} to={'/'} className='ms-2 signup_button' >Sign Up</Nav.Link></h6>
                  </Form>
                    )}
                </Formik>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  ); 
};

export default LoginPage;