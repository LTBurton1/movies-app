function Movie({ movie }) {
  const { title, directors, genres, plot, year, poster } = movie;

  return (
    <li>
      <h3>{title}</h3>
      <h5>{year}</h5>
      {poster ? <img src={poster} alt="" /> : "No Poster Available..."}
      {genres.map(genre => (
        <h6 key={genre}>{genre}</h6>
      ))}
      <p>Directed by:</p>
      {directors.map(director => (
        <p key={director}>{director}</p>
      ))}
      <p>{plot}</p>
    </li>
  );
}

export default Movie;
