import React from "react";
import arrFilms from "./DataMovies";
export function Movies(){

    return(
        <div className="movies" id="films">
            <div className="movie-list">
                {movies()}
            </div>
        </div>
    )
}
export default Movies;

const movies = ()=>{
    return  arrFilms.map(item=>
        <div key={item.src} className="movie-item">
            <a target="_blank" href={item.url}>
            <img src={item.src}></img>
            <p>{item.name}</p>
            </a>
        </div>
    )
}