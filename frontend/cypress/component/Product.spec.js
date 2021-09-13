import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../../src/components/Product/Product";
import { mount } from '@cypress/react';
import { BrowserRouter as Router, MemoryRouter, Route } from "react-router-dom";

describe('Testing Product component should', () => {

  beforeEach(() => {

    mount(
    <Router>
      <MemoryRouter initialEntries={['/items/MLA905132552']}>
        <Route path='/items/:id'>
          <Product />
        </Route>
      </MemoryRouter>
    </Router>);
  });

  it('Verify if has a correct description and price', () => {
    cy.get('.card-text').contains("Apple iPhone SE (2da Generación) 64 Gb - Negro");
    cy.get('.card-title').contains("119999");
  });

})