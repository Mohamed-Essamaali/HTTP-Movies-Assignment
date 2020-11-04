import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import MovieList from './Movies/MovieList';

const initialState = {
    title:'',
    director:'',
    metascore:'',
    stars:[]
}


const UpdateForm =(props)=>{

    let {id} = useParams();
    let history = useHistory();
    const[movie,setMovie] = useState(initialState)
    useEffect(()=>{
        getItem()

    },[id])
  

   
    const getItem = ()=>{
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res=>{
            setMovie(res.data)
            console.log('movie in update form axios get call ',res.data)
        })
        .catch(err=>{
            console.log()
        })
    }
    

    // console.log('active card', activeCard)

    const handleChange = e=>{
    
        setMovie({...movie,[e.target.name]:e.target.value})

    }

    const handleSubmit = e=>{
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${id}`,movie)
        .then(res=>{
            props.setMovieList(...props.movieList,res.data);
            history.push(`/movies/${id}`)

            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className='update-form'>
            <h1> Update movie information</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='title'
                value={movie.title}
                onChange = {handleChange}
                />
                 <input
                type='text'
                name='director'
                value={movie.director}
                onChange = {handleChange}
                />
                 <input
                type='text'
                name='metascore'
                value={movie.metascore}
                onChange = {handleChange}
                />
                <input
                type='list'
                name='stars'
                value={movie.stars}
                onChange = {handleChange}
                />
                <button>Update</button>
            </form>
        </div>
    )
}
export default UpdateForm