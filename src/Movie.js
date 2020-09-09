import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";


import "./Movie.css";

class Movie extends React.Component {

state ={title:"", opening_crawl:"", director:"",release_date:"", producer:""}

componentDidMount(){                                    /*get data van de API */
    const Base_URL = "https://swapi.dev/api/films/";
    const URL = Base_URL + this.props.match.params.movieId;
    axios.get(URL)
    .then(res =>{
        this.setState({
            title: res.data.title,
            opening_crawl: res.data.opening_crawl,
            director: res.data.director,
            producer: res.data.producer,
            release_date: res.data.release_date,
        });
    });
}

render(){
    console.log(this.props.match.params);
    return(
        <div className = "movieContainer" >
            <figure>
                <img src={"/img/movie_" + this.props.match.params.movieId+ ".jpg"} alt={this.props.title || "Geen poster bekend"} />
            </figure>
            <h2>Title of Movie</h2>
            <p>{this.state.title || "Only a sith deals in absolutes"}</p>
            <h2>Release date</h2>
            <p>{this.state.release_date || "Hello there."}</p>
            <h2>Opening Crawl</h2>
            <p>{this.state.opening_crawl || "Unlimited power!"}</p>
            <h2>Director</h2>
            <p>{this.state.director || "I hate sand."}</p>
            <h2>Producers</h2>
            <p>{this.state.producer || "I am the senate."}</p>  
            <br/><Link to="/"><button>BACK</button></Link>  
        </div>
        
        );
}
}

export default Movie;