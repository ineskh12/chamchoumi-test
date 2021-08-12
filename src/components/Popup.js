import React, { useState } from 'react'
import Constants from "../utils/Constants";
import Rating from "react-rating";
//import routes from '../utils/Routes';

function Popup({ selected, closePopup }) {
    const [rating1, setRating1] = useState(0);
    const user = localStorage.getItem('user');
    return (
        <section className="popup">
            <div className="content d-flex flex-row">
                <div className="plot">
                    <img src={`${Constants.IMAGE_URL}/${selected.poster_path}`} alt="scan" />
                </div>
                <div className="d-flex flex-column justify-content-between">
                    <div>
                        <h2>{ selected.title } <span>({ selected.release_date })</span></h2>
                        <p>{selected.overview}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="ml-2" title={user === null ? 'Please login to rate this movie' : null}>
                            <Rating
                                readonly={user === null}
                                fractions={2}
                                emptySymbol="fa fa-star-o fa-2x star"
                                fullSymbol="fa fa-star fa-2x star"
                                initialRating={rating1}
                                onClick={rate => setRating1(rate)}
                            />
                            <p className="mb-0">My rating: {rating1}</p>
                        </div>
                        <button className="close" onClick={closePopup}>Close</button>
                    </div>
                </div>
                <p className="rating">{selected.vote_average}/10</p>
            </div>


        </section>
        


    )
}

export default Popup
