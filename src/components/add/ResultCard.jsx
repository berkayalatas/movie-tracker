import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import alertify from "alertifyjs";

export const ResultCard = ({ movie }) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  //check both list
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              alt={`${movie.title} Poster`}
              className="locandina"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
            <h2>{movie.title}</h2>
            <div style={cardStyle}>
              <h5>
                {" "}
                {movie.release_date
                  ? movie.release_date.substring(0, 4)
                  : "---"}
              </h5>
              <h5 style={{ marginLeft: 10 }}>{movie.vote_average}</h5>
              <h5 style={{ marginLeft: 10 }}>{movie.original_language} </h5>
            </div>
          </div>
          <div className="movie_desc">
            <p className="text">
              {movie.overview.length > 300
                ? movie.overview.substring(0, 300).concat("...")
                : movie.overview}
            </p>
            <div id="movie-buttons">
              <button
                className="btn mr-1 my-1"
                type="button"
                disabled={watchlistDisabled}
                onClick={() => {
                  addMovieToWatchlist(movie);
                  alertify.success("Added to Watchlist");
                }}
              >
                Add to Wishlist
              </button>

              <button
                className="btn my-1"
                type="button"
                disabled={watchedDisabled}
                onClick={() => {
                  addMovieToWatched(movie);
                  alertify.success("Added to Watched");
                }}
              >
                Add to Watched
              </button>
            </div>
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    </>
  );
};
