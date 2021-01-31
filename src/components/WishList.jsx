import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import {Breadcrumb} from "react-bootstrap"
import {Link} from 'react-router-dom'

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
        <Breadcrumb className="w-50">
            <Breadcrumb.Item className=" bg-warning">
              <Link  className=" text-dark" to="/"> Home </Link> 
            </Breadcrumb.Item>
            <Breadcrumb.Item  className=" bg-warning">
              <Link className=" text-dark" to="/watched"> Watched </Link> 
            </Breadcrumb.Item>
            <Breadcrumb.Item  className=" bg-warning" >
              <Link className=" text-dark" to="/add"> Search </Link> 
            </Breadcrumb.Item >
            <Breadcrumb.Item className=" bg-warning" active>
              <Link className=" text-dark" to="/wishlist"> Wishlist </Link> 
            </Breadcrumb.Item >
          </Breadcrumb>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie,index) => (
              <MovieCard movie={movie} key={index} type="watchlist" />
            ))}
          </div>
        ) : (
          <img
            src="https://thumbs.dreamstime.com/b/funny-cute-bear-panda-holding-empty-banner-card-to-do-list-place-text-childish-template-announcement-agenda-note-funny-192143092.jpg"
            alt="EMPTY WATCHLIST"
            style={{ maxWidth: 350, marginLeft: 0 }}
          />
        )}
      </div>
    </div>
  );
};
