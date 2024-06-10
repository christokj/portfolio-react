import React from 'react';
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import bg_img from '../Pages/Images/contact_bg.jpg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function Contact() {

  var bgStyle = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${bg_img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const { Formik } = formik;
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter Fullname").min(3, "Fullname should have minimum 3 characters!!"),
    place: yup.string().required("Please enter Place").min(3, "Place should have minimum 3 characters!!"),
    email: yup.string().required().matches(/\S+@\S+\.\S+/, "Please enter valid email"),
    phone: yup.number().required("Please enter phone number").positive().test('leng', "Phone number should be 10 digits", (value) => {
      if (String(value).length === 10) {
        return true;
      } else {
        return false;
      }
    }),
    messages: yup.string().required("Please enter any messages").min(2, "Messages should have minimum 2 characters!!")

  });

  const handleSignupSubmit = (values) => {
    console.log(values);
  }

  return (
    <>
      <div className="contact_bg" style={bgStyle}>
        <Formik
          validationSchema={schema}
          onSubmit={handleSignupSubmit}
          initialValues={{
            fullName: '',
            email: '',
            phone: '',
            place: '',
            messages: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form className='contact_form text-body fw-normal' noValidate onSubmit={handleSubmit}>
              <h1 className='text-center'>Contact me</h1>
              <Row className="mb-1">
                <Form.Group as={Col} controlId="formGridFullname" className='position-relative'>
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Fullname"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPlace" className='position-relative'>
                  <Form.Label>Place</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Place"
                    name="place"
                    value={values.place}
                    onChange={handleChange}
                    isInvalid={!!errors.place}
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {errors.place}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-1">
                <Form.Group as={Col} controlId="formGridEmail" className='position-relative'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMobile" className='position-relative'>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group controlId="formGridAddress" className='position-relative'>
                <Form.Label>Messages</Form.Label>
                <Form.Control
                  className='contact_msg'
                  as="textarea"
                  placeholder="Type your messages here..."
                  name="messages"
                  value={values.messages}
                  onChange={handleChange}
                  isInvalid={!!errors.messages}
                />
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.messages}
                </Form.Control.Feedback>
              </Form.Group>
              <div className='d-grid gap-2 m-2 '>
                <Button variant="outline-primary" size="" type="submit" >Submit </Button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
export default Contact;

