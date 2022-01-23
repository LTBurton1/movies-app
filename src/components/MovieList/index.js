import Movie from "../Movie";
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <ol className="movie-list">
      {movies.map(movie => (
        <Movie key={movie._id} movie={movie} />
      ))}
    </ol>
  );
}

export default MovieList;
