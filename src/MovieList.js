import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{
    render(){
          
        return(
            <div className="main">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                
            </div>
        )
    }
}

export default MovieList;