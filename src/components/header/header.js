import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem} from 'reactstrap';

import './header.css';

const Header = () => {
    return (
     
        <Navbar expand="md" className="headerBlock">
            <div className="headerTitle">
                <Link to="/">
                    Game of Thrones DB
                </Link>
            </div>
            <Nav className="ml-auto headerLinks" navbar>
                <NavItem>
                    <Link className="nav-link" to="/characters/">Characters</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/houses/">Houses</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/books/">Books</Link>
                </NavItem>
            </Nav>
        </Navbar>
       
    );
};

export default Header;