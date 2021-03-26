import React, {useState, useEffect} from "react";

const MoviePage = ({match}) => {
  
  useEffect(()=>{
    fetchItems();
    console.log(match)
  },[match]);

  const [movie,setMovie] = useState({});
  const [poster,setPoster] = useState('');

  const fetchItems = async () => {
      const data = await fetch(`http://www.omdbapi.com/?apikey=32520f97&i=${match.params.id}`);
      const image = await fetch(`http://img.omdbapi.com/?apikey=32520f97&i=${match.params.id}`);

      const item = await data.json();
      setMovie(item);
      setPoster(image);
      console.log(item);
      console.log(image);
    }

  return (
    <div className="my-movie">
      <h1>{movie.Title}</h1>
      <div className="poster">
        <img src={poster.url} alt="poster"/>
        <div>
          <p><b>Released :</b> {movie.Released}</p>
          <p><b>Production :</b> {movie.Production}</p>
          <p><b>Writer :</b> {movie.Writer}</p>
          <p><b>Actors :</b> {movie.Actors}</p>
          <p><b>Plot :</b> {movie.Plot}</p>
        </div>
      </div>      
    </div>
  );
};

export default MoviePage;