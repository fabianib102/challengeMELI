import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListProduct from "../../src/components/ListProduct/ListProduct";
import { mount } from '@cypress/react';
import { BrowserRouter as Router } from "react-router-dom";
import productList from "../fixtures/productList.json";

describe('Testing ListProduct component should', () => {

  beforeEach(() => {

    const setNameStub = () => {};
    const searchProductStub = () => {};

    mount(
    <Router>
      <ListProduct productList={productList} txtSearch={"TEST"} />
    </Router>);
  });

  it('Verify the title and price correct', () => {
    cy.get('.productItem').contains("Apple iPhone SE (2da Generación) 64 Gb - Negro");
  });

})