import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList,movieList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  let {push } = useHistory();
console.log('params',params)
 

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  const deleteCard = ()=>{
    axios
    .delete(`http://localhost:5000/api/movies/${params.id}`)
    .then(res=>{
      // setMovie(res.data)
      console.log('res.data when delete in movie',movieList)
    
    })
    .catch(err=>console.log(err))
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <button className= 'update-button' onClick={()=>{push(`/update-movie/${params.id}`)}}>
              Edit
    </button>
    <button className= 'delete-button' onClick={()=>{
      deleteCard();
      push('/')
    }}>Delete</button>
      
    </div>
  );
}

export default Movie;
