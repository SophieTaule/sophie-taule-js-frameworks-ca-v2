import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import GameItem from "./GameItem";
import { BASE_URL } from "../../constants/api";
import SearchGame from "./SearchGame";

function GameList() {
    const [games, setGame] = useState(null);
    const [filterSearch, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(json => {
                setGame(Object.values(json.results));
                setFilter(Object.values(json.results));
            })
            .then(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterData = function (e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = games.filter(function (fil) {
            const lowerCaseName = fil.name.toLowerCase();

            if (lowerCaseName.includes(searchValue)) {
                return true;
            }
            return false;
        });

        setFilter(filteredArray);
    };

    if (loading) return <h1 ><Spinner animation="border" className="spinner" variant="info" />Loading Store..</h1>

    return (
        <>
            <SearchGame className="SearchGame" filterSearch={filterData} />
            {filterSearch.map(games => {
                const { id, name, background_image, released, rating } = games;

                return (
                    <GameItem title={name} image={background_image} released={released} rating={rating} id={id} />
                );
            })}
        </>
    );
}

export default GameList;
