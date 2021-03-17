import React from "react";

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <img src={props.posterUrl} alt="poster" />
      <h1>{props.title}</h1>
      <div className="desc"><b>Description:</b> {props.description}</div>
      <div><b>Rate:</b> {props.rate}</div>
    </div>
  );
};

export default MovieCard;
