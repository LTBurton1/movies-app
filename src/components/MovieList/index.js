import Movie from "../Movie";

function MovieList({ movies }) {
  return (
    <ol>
      {movies.map(movie => (
        <Movie key={movie._id} movie={movie} />
      ))}
    </ol>
  );
}

export default MovieList;
