import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-stars";

const MovieCard = ({ el }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={el.posterUrl} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
          value={el.rate}
          edit={false}
        />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;