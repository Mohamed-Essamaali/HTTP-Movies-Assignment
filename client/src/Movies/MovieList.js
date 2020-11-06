import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from 'axios'


function MovieList({ movieList,setMovieList }) {

  const fetchMovie = () => {
    axios
      .get(`http://localhost:5000/api/movies/`)

      .then((res) => {
        setMovieList(res.data);
        console.log('data to updated in list ',res.data)
      })
      .catch((err) => console.log(err.response));
  };

 

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie-list">
      {
        movieList.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList;
