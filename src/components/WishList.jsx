import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const WishList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="containerr">
        <div className="header">
          <h1 className="text-dark">My Wishlist</h1>
          <span className="count-pill">
            {watchlist.length}
            {watchlist.length <= 1 ? " Movie" : " Movies"}
          </span>
        </div>



        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
            <img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
             alt="EMPTY WATCHLIST"
             style={{maxWidth:350, marginLeft:0}}
            />
        )}
      </div>
    </div>
  );
};
