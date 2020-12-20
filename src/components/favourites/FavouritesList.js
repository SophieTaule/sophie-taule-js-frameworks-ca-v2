import React from "react";
import FavItem from "./FavItem";


function FavouritesList() {
    let favorite = JSON.parse(localStorage.getItem("Favourites"));

    return (
        <>
            {favorite.map(game => {
                const { title, id, image, rating, released } = game;
                return (
                    <FavItem title={game.[1]} image={game.[2]} released={game.[3]} rating={game.[4]} id={game.[0]} />
                )
            })}
        </>
    );
}

export default FavouritesList;