import React from "react";
import "../../../src/MoviesCard.css"
import {useContext} from "react";
import {GlobalContext} from '../../context/GlobalState'
import alertify from 'alertifyjs'

const PopularCard = ({ movie }) => {
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
    ? true: storedMovieWatched
    ? true : false;
   

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="">
      <div id="movie-card-list">
        <div className="movie-cards" data-movie="Blade Runner"
        style={
            {backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})`}
        }>
          <div className="movie-card__overlay"></div>

          <div className="movie-card__content">
            <div className="movie-card__header">
              <h2 className="movie-card__title">{movie.title}</h2>

              <div style={{display: 'flex',
               flexDirection:"row", justifyContent: "space-between" }} 
              className="movie-card__info my-3">
                <div style={{marginRight:"10px"}}>
                  {movie.release_date
                    ? movie.release_date.substring(0, 4)
                    : "---"}
                </div>
                <div style={{marginRight:"10px"}}>{movie.vote_average}</div>
                <div style={{marginRight:"10px"}}>{movie.original_language}</div>
                   
              </div>
            </div>
            <p className="movie-card__desc">
              {movie.overview.split(".").slice(0, 2).join(".")}
            </p>
            <div id="movie-buttons"  >
                <button className="btn mr-1" 
                    type="button" 
                    disabled={watchlistDisabled}
                    onClick={()=>{
                      addMovieToWatchlist(movie);
                      alertify.success("Added to Wishlist");
                    }}>
                Add to Wishlist
                </button>

                <button className="btn " 
                    type="button" 
                    disabled={watchedDisabled}
                    onClick={
                      ()=>{ 
                        addMovieToWatched(movie)
                        alertify.success("Added to Watched");
                      }}>
                Add to Watched
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
