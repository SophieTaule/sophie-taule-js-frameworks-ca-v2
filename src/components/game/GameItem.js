//import React from 'react';
import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


var favourites = [];

function GameItem({ id, title, image, rating, released }) {
    const [favorite, setFavorite] = useState(false);

    if (favorite === false) {
        setFavorite("☆");
    }

    let favoritelist = JSON.parse(localStorage.getItem("Favourites"));

    function FavouriteGame() {
        console.log(favorite);

        if (favorite === "★") {
            setFavorite("☆");
            console.log(favourites[0]);
            console.log(id);
            var data;

            for (data = 0; data < favourites.length; data++) {
                if (id === favourites[data][0]) {
                    favourites.splice(data, 1);
                    console.log(favourites);
                    localStorage.setItem("Favourites", JSON.stringify(favourites));
                    data = 0;
                }
            }

        } else {
            setFavorite("★");
            favourites[favourites.length] = [id, title, image, released, rating];
            localStorage.setItem("Favourites", JSON.stringify(favourites));
        }
    }
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} alt="game-img" />
            <Card.Body>
                <Card.Title className="game__title">{title}</Card.Title>
                <div className="game__info">
                    <p className="game__info--stat">&#9733; {rating} <span>Rating</span></p>
                    <p className="game__info--stat">{released} <span>Release Date</span></p>
                </div>
                <Button className="game_btn" variant="info" size="lg" block href={"game/" + id}>View</Button>
                <button className="fav" onClick={FavouriteGame}>{favorite}</button>
            </Card.Body>
        </Card>
    );
}

GameItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired
}

export default GameItem;