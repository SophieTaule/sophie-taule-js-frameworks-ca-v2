
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Genres from "./Genres";


function GamePageDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if (loading) {
        return <h1 ><Spinner animation="border" className="spinner" variant="info" />Loading Store..</h1>
    }

    return (
        <Container className="game__detail--container">
            <Container className="game__detail--background">
                <Image src={detail.background_image} /></Container>
            <Row>
                <Col xl={8}>
                    <Image className="game__detail--image" fluid src={detail.background_image} />
                </Col>
                <Col className="Game__Detail">
                    <h1 className="Game__Detail--title">{detail.name}</h1>
                    <Genres genres={detail.genres} />
                    <div className="Game__Detail--description" dangerouslySetInnerHTML={{ __html: detail.description }} />
                    <Button className="game_btn" variant="info" href={detail.website} target="_blank">Go to Website</Button>
                </Col>
            </Row>
        </Container >
    );
}

export default GamePageDetail;


/*
 <Container className="GameDetail-container">
            <Row>
                <Col md={6} className="detail-image">
                    <Image src={detail.background_image} />

                </Col>
                <Col>
                    <h1>{detail.name}</h1>
                    <br />

                    <div dangerouslySetInnerHTML={{ __html: detail.description }} />

                    <p>
                        <br />
                        <Button className="game_btn" variant="info" href={detail.website} target="_blank" rel="noopener noreferrer">Go to Website</Button>

                    </p>
                </Col>
            </Row>
        </Container>

/*
   <Genres genres={detail.genres} />*/


/*import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GamePageDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <Row>
            <Col md={6} className="detail-image">
                <Image src={detail.image} roundedCircle />
            </Col>
            <Col>
                <h1>{detail.name}</h1>
                <p>
                    <b>Gender:</b> {detail.gender}
                </p>
                <p>
                    <b>Species:</b> {detail.species}
                </p>
                <p>
                    <b>Status:</b> {detail.status}
                </p>
            </Col>
        </Row>
    );
}

export default GamePageDetail; */