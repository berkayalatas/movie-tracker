import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext); //get the functions from other components

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" data-toggle="tooltip" 
            data-placement="bottom" 
            title="Move to Watched" 
          onClick={()=> addMovieToWatched(movie)} >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button data-toggle="tooltip" 
            data-placement="bottom" 
            title="Remove From Wishlist" 
          onClick={()=> removeMovieFromWatchlist(movie.id)}
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" data-toggle="tooltip" 
            data-placement="bottom" 
            title="Move to Wishlist" 
            onClick={ ()=> {moveToWatchlist(movie)} }
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button data-toggle="tooltip" 
            data-placement="bottom" 
            title="Remove From Watched" 
            className="ctrl-btn"
            onClick={ ()=> {removeFromWatched(movie.id)} } 
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};