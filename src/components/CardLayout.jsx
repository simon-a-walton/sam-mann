import React from 'react';
import Card from 'react-bootstrap/Card';

const CardLayout = (props) => {
  return (
    <Card className='card-border card-container'>
      <div className='card-icon'>
        <i className={props.icon} />
      </div>
      <Card.Body>
        <Card.Title style={{fontSize:'calc(10px + 1.25vw)'}}>
          <span className='mobile-text'><strong>{props.header}</strong></span>
        </Card.Title>
        <Card.Text className='pt-3'>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardLayout;
