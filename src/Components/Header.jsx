import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
function Header() {
  return (
    <>
      <Navbar  expand={'md'} className="bg-dark bg-gradient fixed-top mb-3">
        <Container fluid className='my-1'>
          <Navbar.Brand href="#" className='text-white fw-bold fs-4 ms-3'>CHRISTO K J</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={'/Home'} className='text_color fs-5'>Home</Nav.Link>
                <Nav.Link as={Link} to={'/Services'} className='text_color fs-5'>Services</Nav.Link>
                <NavDropdown
                    title={<span className="text_color my-auto">Dropdown</span>}
                    id="offcanvasNavbarDropdown-expand-md"
                    className='text_color fs-5'
                    data-bs-theme="white"
                  >
                    <NavDropdown.Item as={Link} to={'/Experiences'} >Experiences</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/Contact'} >Contact me</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to={'/Social'}>Social media</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                />
                <Button className=' me-2' variant="outline-primary">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
       
    </>
    );
};

export default Header;