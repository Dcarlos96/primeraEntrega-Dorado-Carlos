import React from 'react'
import {  Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Item({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain'
        }} src={prod.images} />
      <Card.Body>
        <Card.Title>{prod.name} </Card.Title>
        <Card.Text>
          ${prod.price}
        </Card.Text>
        <Link  className='btn btn-secondary' to={`/item/${prod.id}`}>Ver Mas</Link>
      </Card.Body>
    </Card>
  );
}

export default Item