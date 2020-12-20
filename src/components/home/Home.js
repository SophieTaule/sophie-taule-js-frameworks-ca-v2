import React from 'react';
import GameList from "../game/GameList";
//import SliderContainer from "../slider/SliderContainer";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
//import WeekendDeals from "./components/game/WeekendDeals";

function Home() {
    return (
        <div className="home">

            <Container className="card-container">
                <Row>
                    <GameList />
                </Row>
            </Container>
        </div>
    );
}
export default Home;
   /*<SliderContainer className="SliderContainer" />*/