import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Container} from "react-bootstrap";

const Recipes = ({ data }) => {
  return (
    <Container>
   
    <Card className="mt-5">
    <Card.Img variant="top" src={data.strMealThumb} />
      <Card.Body>
        <Card.Title>{data.strMeal}</Card.Title>
      </Card.Body>
      </Card>
    
    </Container>
  );
};

export default Recipes;
