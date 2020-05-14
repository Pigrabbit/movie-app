import React from "react";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
  // doesn't have return
  constructor(props) {
    super(props);
    console.log("construct");
  }
  // put data which will be changed in state
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    const data = await response.json();
    const movies = data.data.movies;
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    console.log("component rendered!");
    this.getMovies();
    console.log("movie retrieved!");
  }

  render() {
    console.log("rendering...");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movie">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
