import React from 'react';
import { Link } from "react-router-dom";

export default function MovieItems({ movies, title }) {

    return (
        <div className="Movie-outer">
                <h1><i>{title}</i></h1>
            <div className="movies-list">
                {
                    movies.map((movie) => {
                        return (
                            <Link to={`/moviedetail${movie.id}`}>

                                <div className="card">
                                    <img src={movie.poster} className="card-img-top" alt="/" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.movieName}</h5>
                                        <p className="card-text">{movie.hero}</p>
                                        <a href="/" className="btn btn-dark">More details</a>
                                    </div>
                                </div>


                                {/* <div className="movie">
                                <img id="image" src={movie.poster} alt="MoviePoster" />
                                <h2 className="tags">{movie.movieName}</h2>
                                <h3 className="tags">{movie.hero}</h3>
                            </div> */}
                            </Link>
                        )
                    })
                }
                <br />
            </div>
        </div>
    );
}
