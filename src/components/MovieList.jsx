import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return movies.map((el, i) => (
    <div key={i}>
      <MovieCard movie={el} />
    </div>
  ));
};

export default MovieList;
