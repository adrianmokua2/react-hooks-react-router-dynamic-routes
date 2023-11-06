import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  // call useParams to access the `params` from the url
  const params = useParams();
  console.log(params.movieId);

  return (
    <div>
      <h1>{movies[params.movieId - 1].title}</h1>
      <p>{movies[params.movieId - 1].description}</p>
    </div>
  );
}

export default MovieShow;