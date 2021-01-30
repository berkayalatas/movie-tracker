import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const WishList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="containerr">
        <div className="header">
          <h1 className="text-warning">My Wishlist</h1>
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
            <img src="https://thumbs.dreamstime.com/b/funny-cute-bear-panda-holding-empty-banner-card-to-do-list-place-text-childish-template-announcement-agenda-note-funny-192143092.jpg"
             alt="EMPTY WATCHLIST"
             style={{maxWidth:350, marginLeft:0}}
            />
        )}
      </div>
    </div>
  );
};
