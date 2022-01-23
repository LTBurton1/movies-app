import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Loading from "../Loading";
import MovieList from "../MovieList";
import Input from "../Input";

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/movies?max=25`).then(res => setMovieList(res.data));
  }, []);

  function updateMovies(title, year) {
    if (title) {
      axios.get(`${process.env.REACT_APP_API_URL}/movies?title=${title}`).then(res => {
        if (year) {
          const filtered = res.data.filter(movie => movie.year === year);
          setMovieList(filtered);
        } else setMovieList(res.data);
      });
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/movies?year=${year}`)
        .then(res => setMovieList(res.data));
    }
  }

  return (
    <div className="App">
      <h1 className="title">Movie Search</h1>
      <Input updateMovies={updateMovies} />
      <div className="movie-list-container">
        <h4 className="results-counter">Results: {movieList.length}</h4>
        {movieList.length > 0 ? <MovieList movies={movieList} /> : <Loading />}
      </div>
    </div>
  );
}

export default App;
