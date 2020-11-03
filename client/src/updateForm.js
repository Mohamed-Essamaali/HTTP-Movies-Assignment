import React, { useState } from 'react'

const initialState = {
    title:'',
    director:'',
    metascore:'',
    stars:[]
}

const UpdateForm =()=>{
    const[movie,setMovie] = useState(initialState)


    const handleChange = e=>{
        e.persist();
        setMovie(...movie,{[e.target.name]:e.target.value})

    }

    return(
        <div className='update-form'>
            <h1> Update movie information</h1>
            <form>
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
                type='text'
                name='stars'
                value={movie.stars}
                onChange = {handleChange}
                />
            </form>
        </div>
    )
}
export default UpdateForm