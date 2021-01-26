import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
    const {watched} = useContext(GlobalContext)
  return (
    <div className="movie-page">
      <div className="containerr">
        <div className="header">
          <h1 className="text-dark">Watched Movies</h1>
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
          <img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
           alt="EMPTY WATCHED LIST"
            style={{maxWidth:350, marginLeft:0}}
           />
        )}
      </div>
    </div>
  );
};
