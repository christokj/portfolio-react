import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Experiences.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function Experiences() {
  const [exp, setExp] = useState([]);
  const [valueFetched, setValueFetched] = useState(null);

  const getValue = (() => {
    axios.get('ExpJson.json').then((res) => {
      setExp(res.data);
      setValueFetched(true);
    })
    .catch(err => console.log(err))
  })
  useEffect(() => {
    if (!valueFetched) {
      getValue();
    }
  }, [valueFetched]);

  return (
    <>
      <div className="experience_bg">
        <Row xs={1} sm={2} md={3} className="g-4 Experience_cards">
          {exp?.map((value) => (
            <Col key={value.id}>
              <Card className='exp_cards_col'>
                <Card.Img className='exp_card_img' variant="top" src={value.logo} />
                <Card.Body>
                  <Card.Title >{value.title}</Card.Title>
                  <Card.Text>
                    {value.position}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

    </>
  );
}
export default Experiences;
