import React, { useEffect, useState } from "react";
import CategoryMovieCard from "./CategoryMovieCard";


const GetMovies = ({movie}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then(
        (data) => {
          setMovies(data.results);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <div
        className="text-warning"
        style={{ textAlign: "center", marginTop: 25 }}
      >
        <h1>Now Playing</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {movies.map((movie,index) => (
                <CategoryMovieCard key={index} movie={movie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMovies;
