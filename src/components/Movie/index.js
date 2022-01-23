import "./Movie.css";

import Loading from "../Loading";

function Movie({ movie }) {
  const { title, directors, genres, plot, year, poster, cast } = movie;

  console.log(movie);

  return (
    <li className="movie-container">
      <div className="movie-header">
        <h3 className="movie-title">{title}</h3>
        <h5 className="movie-year">{year}</h5>
      </div>
      <div className="movie-info-left">
        <div className="movie-poster-container">
          {poster ? (
            <img className="movie-poster" src={poster} alt="" />
          ) : (
            <Loading text="No Poster Available" />
          )}
        </div>

        <div className="movie-genres">
          {genres.map(genre => (
            <h6 className="movie-genre" key={genre}>
              {genre}
            </h6>
          ))}
        </div>
      </div>

      <div className="movie-info-right">
        <h4 className="movie-directors-title">Directed by:</h4>
        {directors.map(director => (
          <p className="movie-director" key={director}>
            {director}
          </p>
        ))}

        <div className="movie-plot">
          <h4>Plot</h4>
          <p className="movie-plot-text">{plot}</p>
        </div>

        <div className="movie-cast">
          <h4>Starring</h4>
          {cast.map(actor => (
            <p>{actor}</p>
          ))}
        </div>
      </div>
    </li>
  );
}

export default Movie;
