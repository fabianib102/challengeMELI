import React from "react";
import { Navbar, InputGroup, FormControl } from "react-bootstrap";
import logo from "../../assets/images/Logo_ML@2x.png.png";
import btnSearch from "../../assets/images/ic_Search@2x.png.png"
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ setName }) {

  const handleFind = () => {
    alert('que le vamos hacer')
  }

  return (
    <Navbar expand="lg" className="headerCustom">
      <div className="container">
        <Link to={`/`}>
          <Navbar.Brand className="headerCustom-brand">
            <img src={logo} className="d-inline-block align-top" />
          </Navbar.Brand>
        </Link>
        <InputGroup>
          <FormControl placeholder="Nunca dejes de buscar" className="inputFind" onChange={e => setName(e.target.value)} />
          <button className="btnSearch">
            <img src={btnSearch} className="btnSearchImg" onClick={handleFind}/>
          </button>
        </InputGroup>
      </div>
    </Navbar>
  );
}

export default Header;
