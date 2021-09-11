import React from "react";
import { Navbar, InputGroup, FormControl } from "react-bootstrap";
import logo from "../../assets/images/Logo_ML@2x.png.png";
import btnSearch from "../../assets/images/ic_Search@2x.png.png"
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ setName, searchProduct }) {

  const handleFind = () => {
    searchProduct()
  }

  return (
    <Navbar expand="lg" className="headerCustom">
      <div className="container">
        <Link to={`/`}>
          <Navbar.Brand className="headerCustom-brand">
            <img src={logo} alt="logo" className="d-inline-block align-top" />
          </Navbar.Brand>
        </Link>
        <InputGroup>
          <FormControl placeholder="Nunca dejes de buscar" className="inputFind" onChange={e => setName(e.target.value)} />
          <button className="btnSearch" onClick={handleFind}>
            <img src={btnSearch} alt="btn logo" className="btnSearchImg"/>
          </button>
        </InputGroup>
      </div>
    </Navbar>
  );
}

export default Header;
