import React from 'react';
import "./sass/style.scss";
import GameList from "./components/game/GameList";
import SliderContainer from "./components/slider/SliderContainer";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
//import WeekendDeals from "./components/game/WeekendDeals";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <h1 className="StoreName"> Game Shop</h1>
        <SliderContainer className="SliderContainer" />
        <Container className="card-container">
          <Row>
            <GameList />
          </Row>

        </Container>
      </div>
    </Layout>
  );
}
export default App;


/* <WeekendDeals />*/