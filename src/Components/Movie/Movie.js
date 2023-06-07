import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Movie = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-75 mx-auto">
      <div class="container">
        <div class="row">
          <div>
            <div className="container">
              <div className="row">
                {movie?.map((movie) => {
                  return (
                    <div className="col-md-4 g-5">
                      <Card>
                        <Card.Img
                          variant="top"
                          src={movie?.show?.image?.medium}
                        />
                        <Card.Body>
                          <h2 className="fs-2 mb-1">{movie?.show?.name}</h2>
                          <p className=" mb-0">
                            Status : {movie?.show?.status}
                          </p>
                          <p className=" mb-0">
                            Ratings : {movie?.show?.rating?.average}
                          </p>

                          <Link to={movie?.show?.name} state={movie}>
                            <button type="button" class="btn btn-primary mt-3">
                              Details
                            </button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
