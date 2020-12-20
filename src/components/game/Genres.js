import React from "react";
import Badge from 'react-bootstrap/Badge'

function Genres({ genres }) {

    return (
        <div className="InfoLists">
            <>
                {genres.map(item => {
                    const { name, id } = item;
                    return <Badge pill variant="info" key={id}> {name}</Badge>;
                })}
            </>

        </div>
    );
}
export default Genres;