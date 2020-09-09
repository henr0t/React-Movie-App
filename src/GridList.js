import React from "react";
import GridItem from "./GridItem";
import "./GridList.css";

const GridList = (props) =>{
    let movieList = props.movieList.map(movie =>{   /*maakt variable movielist, waarbij er geloopt wordt en per "film" wordt geprint*/
        return <GridItem key={movie.title} image={movie.img} movie={movie.movie}/>
    })
    return(
        <ul className="gridList">
                {movieList}
        </ul>

    );
}

export default GridList