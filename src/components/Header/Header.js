import React from "react";
import { Navbar, InputGroup, Button, FormControl } from "react-bootstrap";
import logo from "../../assets/images/Logo_ML@2x.png.png";
import "./Header.scss";

function Header() {
  return (
    <Navbar expand="lg" className="headerCustom">
      <Navbar.Brand href="#" className="headerCustom-brand">
          <img src={logo} className="d-inline-block align-top" />
        </Navbar.Brand>
      <InputGroup>
        <FormControl placeholder="Nunca dejes de buscar" />
        <Button variant="outline-secondary">Button</Button>
      </InputGroup>
    </Navbar>
  );
}

export default Header;
