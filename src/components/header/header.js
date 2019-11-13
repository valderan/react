import React from 'react';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

import './header.css';

const Header = () => {
    return (
     
        <Navbar expand="md" className="headerBlock">
            <div className="headerTitle">
                <NavbarBrand href="#">Game of Thrones DB</NavbarBrand>
            </div>
            <Nav className="ml-auto headerLinks" navbar>
                <NavItem>
                    <NavLink href="#">Characters</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Houses</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Books</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
       
    );
};

export default Header;