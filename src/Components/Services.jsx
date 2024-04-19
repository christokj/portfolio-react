import React from 'react';
import "./Services.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaNetworkWired } from "react-icons/fa";
import Header from './Header';

function Services() { 
  return (
    <>
      <Header/>
      <div className='services_bg'>
      <Row  md={3} className=" services_cards ">
        {Array.from({ length: 3 }).map((_, idx) =>  ( 
          <Col key={idx} className=' services_col '>
            <Card className=' rounded-4'>
              <FaNetworkWired className='w-100 h3 mt-3 ' />
              <Card.Body className='services_card_body'>
                <Card.Title className='text-center '>
                  {idx===0 ? <h5 className='services_text'>Hardware and Networking</h5> : null}
                  {idx===1 ? <h5 className='services_text'>Sales</h5> : null}
                  {idx===2 ? <h5 className='services_text'>Digital Services</h5> : null}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>  
          ))}
      </Row>
      </div>
    </>
  );
}

export default Services;