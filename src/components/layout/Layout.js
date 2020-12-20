import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
//import Game from "../game/Game";
import Contact from "../contact/Contact";
import GamePageDetail from "../game/GamePageDetail";
import Favourites from "../favourites/Favourites";


function Layout() {
    return (
        <Router>
            <Navbar sticky="top" bg="dark" variant="dark" expand="md">
                <NavLink to="/" exact>
                    <Navbar.Brand href="#home">Game store</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link"> Home</NavLink>
                        <NavLink to="/Favourites" className="nav-link"> Favourites</NavLink>
                        <NavLink to="/contact" className="nav-link"> Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/game/:id" component={GamePageDetail} />
                    <Route path="/Favourites" component={Favourites} />
                </Switch>
            </Container>
        </Router>
    );
}

export default Layout;

/*    <Route path="/Favourites">
                        <Favourites title="Favourites"></Favourites>
                    </Route> */

/*<Route path="/character/:id" component={CharacterDetail} />*/
