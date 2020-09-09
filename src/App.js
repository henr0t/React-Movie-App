import React from "react";
import GridList from "./GridList";
import SearchBar from "./SearchBar";
import Movie from "./Movie";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"; /*loss componenten van router dom package */
import "./App.css";
import movieList from "./movieList";





class App extends React.Component {

    state = {
        list: movieList
    }
    filterList = (searchTerm) => {               /*zoek functionaliteit dat filtered op wat je zoekt */
        const newList = movieList.filter(movie => {
            if (movie.title.toLowerCase().split('').join('').indexOf(searchTerm.toLowerCase().split('').join('')) !== -1) { /*-1 is wanneer de letter niet in de titel zit */
                return movie;
            }
        });
        this.setState({
            list: newList
        });
    }

    render() {
        return (
            <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <main>
                            <SearchBar filterList={this.filterList} placeholder="Search for a movie title" />
                            <GridList movieList={this.state.list} />
                            <Link to="/about"><h3>About this project</h3></Link>
                        </main>
                    </Route>
                    <Route exact path="/about">
                        <h2>What about me?</h2>
                    </Route>
                    <Route exact path="/movie/:movieId" component={Movie} />
                    <Redirect to="/" />
                </Switch>
            </Router>
            </React.Fragment>
        );
    }
}

export default App;