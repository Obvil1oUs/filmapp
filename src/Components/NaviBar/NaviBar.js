import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import SearchField from '../SearchField/SearchField';

const NaviBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><img src={logo} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Popular </NavLink>
                        <NavLink to="/movies" className="nav-link">Movies</NavLink>
                        <NavLink to="/series" className="nav-link">TV Series</NavLink>
                        <NavLink to="/random" className="nav-link">Random Film</NavLink>
                    </Nav>
                    <SearchField/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NaviBar;