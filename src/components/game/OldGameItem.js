import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RawrItem({ id, title, image, rating, released }) {

    return (
        <div className="game-container">
            <div className="game">
                <div className="fav">&#9733;</div>
                <div className="front">
                    <img className="thumbnail" src={image} alt="tumb game" />
                    <h5 className="title">{title}</h5>
                    <p className="subtext">text</p>
                </div>
                <div className="back">
                    <div className="game__info">
                        <p className="game__info--stat">&#9733; {rating} <span>Rating</span></p>
                        <p className="game__info--stat">{released}<span>Release Date</span></p>
                    </div>
                    <Link className="game_btn" to={"game/" + id}>View</Link>
                </div>
                <div className="background">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

RawrItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired
}

export default RawrItem;


/* white star: &#9734; */