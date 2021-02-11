import React, { useEffect, useState } from "react";
import TopRatedCard from "./TopRatedCard";


const GetTopRated = ({movie}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=edc1f1d207ed1ebb38efc80f79026ee6&language=en-US&page=1`)
    .then((response) => response.json())
    .then(
      (data) => {
        setMovies(data.results);
      }
    )
    .catch(error => console.log('error', error));
  }, []);

  return (
    <div>
      <div
        className="text-warning"
        style={{ textAlign: "center", marginTop: 25 }}
      >
        <h1>TOP RATED MOVIES</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {movies.map((movie,index) => (
                <TopRatedCard key={index} movie={movie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTopRated;
