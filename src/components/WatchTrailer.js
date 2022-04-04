import React from 'react';
import { useParams } from 'react-router-dom';
import {movies} from '../data/MovieData'
 

function WatchTrailer() {
  const {id}=useParams()
  const movie=movies.find(movie=>movie.id==id)
  
  return (
      <div>
    <iframe width="560" 
    height="315" 
    src={movie.trailer} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
    </iframe>
    <p>{movie.description}</p>
    </div>
  )
}

export default WatchTrailer