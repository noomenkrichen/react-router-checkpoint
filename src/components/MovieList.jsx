import React from "react";
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";

const MovieList = ({ movies }) => {
 
  return movies.map((el, i) => (
    <Link to={`/movie/${el.imdbID}`} key={i}>
      <MovieCard el={el}/>
    </Link>
  ));
};

export default MovieList;
