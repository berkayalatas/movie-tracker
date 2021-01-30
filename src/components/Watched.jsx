import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
    const {watched} = useContext(GlobalContext)
 

  return (
    <div className="movie-page">
      <div className="containerr">
        <div className="header">
          <h1 className="text-warning">Watched Movies</h1>
          <span className="count-pill">
          {watched.length}
            {watched.length <= 1 ? " Movie" : " Movies"}
            </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <img src="https://thumbs.dreamstime.com/b/funny-cute-bear-panda-holding-empty-banner-card-to-do-list-place-text-childish-template-announcement-agenda-note-funny-192143092.jpg"
           alt="EMPTY WATCHED LIST"
            style={{maxWidth:350, marginLeft:0}}
           />
        )}
      </div>
    </div>
  );
};
