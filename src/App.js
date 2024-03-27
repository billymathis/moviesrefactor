import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";
import axios from "axios";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/moviess.json")
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="col-sm">
        <h1>My Movies</h1>
        {movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.title} data={movie} />)
        ) : (
          <p>{"No movies found"}</p>
        )}
      </div>
    </div>
  );
}

export default App;
