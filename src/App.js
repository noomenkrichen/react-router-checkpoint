import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovieModal from "./components/AddMovieModal";
import MyNavbar from "./components/MyNavbar";
import MoviePage from "./components/MoviePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
      "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
      "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      2
    ),
    createMovie(
      "Spider-Man: Far from Home",
      "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      3
    ),
    createMovie(
      "Captain America: The First Avenger",
      "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
      "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      4
    ),
    createMovie(
      "The Avengers",
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      5
    ),
    createMovie(
      "Iron-Man",
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      2
    ),
    createMovie(
      "Hannibal",
      "Explores the early relationship between renowned psychiatrist, Hannibal Lecter, and his patient, a young FBI criminal profiler, who is haunted by his ability to empathize with serial killers.",
      "https://m.media-amazon.com/images/M/MV5BNWU5YmJhNWEtZGVlOS00NmRhLThmNzUtYjAyMDA2MDg5ZTM4XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR4,0,182,268_AL_.jpg",
      3
    ),
    createMovie(
      "Spider-Man: Homecoming",
      "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      2
    ),
    createMovie(
      "The Godfather",
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
      4
    ),
    createMovie(
      "The Shawshank Redemption",
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      1
    ),
    createMovie(
      "Dexter",
      "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
      "https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_UY268_CR7,0,182,268_AL_.jpg",
      2
    ),
  ]);

  const [display, setDisplay] = useState([...movies]);

  const addMovie = (obj) => {
    setMovies([...movies, obj]);
    setDisplay([...movies, obj]);
  };

  const searchMovies = (str) => {
    let arr = [...movies];
    setDisplay(
      arr.filter((el) => el.title.toLowerCase().includes(str.toLowerCase()))
    );
  };
  const searchMoviesRate = (rate) => {
    let arr = [...movies];
    setDisplay(arr.filter((el) => el.rate >= rate));
  };

  return (
    <Router>
    <div className="App">
      <MyNavbar
        searchMovies={searchMovies}
        searchMoviesRate={searchMoviesRate}
      />

      <AddMovieModal addMovie={addMovie} />

      <div className="movie-list">
        <MovieList movies={display} />
      </div>

      <Route path="/movie" component={MoviePage}/>
    </div>
    </Router>
  );
}

export default App;
