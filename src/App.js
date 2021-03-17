import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { useState } from "react";
import "./App.css";

function App() {
  const createMovie = (title, description, posterUrl, rate) => {
    return {
      title: title,
      description: description,
      posterUrl: posterUrl,
      rate: rate,
    };
  };

  const [movies, setMovies] = useState([
    createMovie(
      "Jumanji",
      "This is an adventure movie in the jungle",
      "img/jumanji.jpg",
      4.0
    ),
    createMovie(
      "Spider-Man",
      "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      "img/spider-man.jpg",
      4.5
    ),
    createMovie(
      "Captain America",
      "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
      "img/captain-america.jpg",
      4.8
    ),
    createMovie(
      "The Avengers",
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "img/avengers.jpg",
      5.0
    ),
  ]);

  const addMovie = () => {
    const title = prompt("Title");
    const description = prompt("Description");
    const posterUrl = prompt("Poster Url");
    const rate = prompt("Rate");
    setMovies([...movies, createMovie(title, description, posterUrl, rate)]);
  };

  const filterMovies = () => {
    const arr = [...movies];
    const rate = prompt("Rate");
    setMovies(arr.filter((el) => el.rate >=rate))
  };

  const filterMoviesTitle = () => {
    const arr = [...movies];
    const str = prompt("Title");
    setMovies(arr.filter((el) => el.title.toLowerCase().includes(str.toLowerCase())))
  };

  const searchMovies = () => {
    const arr = [...movies];
    const str = prompt("Word");
    setMovies(arr.filter((el) => el.title.toLowerCase().includes(str.toLowerCase()) || el.description.toLowerCase().includes(str.toLowerCase())))
  };

  return (
    <div className="App">
      <div id="movies" className="movie-list">
        <MovieList movies={movies} />
      </div>
      <div id="btn1">
        <button onClick={addMovie}>Add movie</button>
        <button onClick={filterMovies}>Filter movie by rate</button>
        <button onClick={filterMoviesTitle}>Filter movie by title</button>
        <button onClick={searchMovies}>Search movies by word</button>
      </div>
      
    </div>
  );
}

export default App;