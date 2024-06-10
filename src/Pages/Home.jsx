import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import christoImage from './Images/KJ-rounded.png';
import Flex from '@react-css/flex'
import './Home.css';

function Home() {
  return (
    <>
      <div className='bg-gradient-secondary bg-light Home_bg'>
        <Container >
          <Flex >
            <Flex.Item className='mt-5 pt-5'>
              <img className='my-3 w-100 ' src={christoImage} alt='christo' />
            </Flex.Item>
            <Flex.Item className='ms-4 w-75  title_bio '>
              <p className=' fw-bold bio_text'>Full Stack Web Developer <br /> Thrissur, Kerala , India</p>
              <p className=' fw-bold bio_text'>" I am able to do all things through Him who strengthens me."</p>
              <p className=' fw-bold bio_text'>"Success is not final; failure is not fatal: <br />  It is the courage to continue that counts."</p>
            </Flex.Item>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Home;