import React from "react";
import { Navbar, InputGroup, Button, FormControl } from "react-bootstrap";
import logo from "../../assets/images/Logo_ML@2x.png.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="headerCustom">
      <div className="container">
        <Link to={`/`}>
          <Navbar.Brand className="headerCustom-brand">
            <img src={logo} className="d-inline-block align-top" />
          </Navbar.Brand>
        </Link>
        <InputGroup>
          <FormControl placeholder="Nunca dejes de buscar" className="inputFind" />
          <Button variant="outline-secondary" className="btnFind">Button</Button>
        </InputGroup>
      </div>
    </Navbar>
  );
}

export default Header;
