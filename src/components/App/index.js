import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Loading from "../Loading";
import MovieList from "../MovieList";

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/movies`).then(res => setMovieList(res.data));
  }, []);

  return (
    <div className="App">
      <h1>Movie Search</h1>
      {movieList.length > 0 ? <MovieList movies={movieList} /> : <Loading />}
    </div>
  );
}

export default App;
