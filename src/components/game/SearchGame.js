import React from 'react';
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchGame({ filterSearch }) {
    return (
        <InputGroup className="SearchGame">
            <FormControl placeholder="Search by Game Title..." onChange={event => filterSearch(event)} />
        </InputGroup>
    );
}

SearchGame.propTypes = {
    filterSearch: PropTypes.func.isRequired
};

export default SearchGame;