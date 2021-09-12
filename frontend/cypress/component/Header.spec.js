import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../src/components/Header/Header";
import { mount } from '@cypress/react';
import { BrowserRouter as Router } from "react-router-dom";

describe('Testing Header component should', () => {

  beforeEach(() => {

    const setNameStub = () => {};
    const searchProductStub = () => {};

    mount(
    <Router>
      <Header setName={setNameStub} searchProduct={searchProductStub} />
    </Router>);
  });

  it('Verify if has a correct placeholder', () => {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Nunca dejes de buscar')
  });

})