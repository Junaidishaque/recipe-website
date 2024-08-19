import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Result = ({data}) => {
  return (
    <>
   <Row className="d-flex flex-wrap">
  {data.map((item,ind)=>{
   return( 
 
 <Col key={item.id} lg={3} md={4} sm={6} xs={12} className="d-flex mb-3">
     <Card style={{ width: '18rem' }} className="flex-fill mt-3">
     <Card.Img variant="top" src={item.image}style={{ height: '20rem' }} />
     <Card.Body >
       <Card.Title><h4>{item.name}</h4></Card.Title>
       <h6>{item.cuisine} Cuisine</h6>
      <Link to={`/detailrecipe/${item.id}`}>
                   <Button variant="primary">View Recipe</Button>
                 </Link>
     </Card.Body>
   </Card>
   </Col>
   )  
})}
</Row> 
    </>
  )
}

export default Result