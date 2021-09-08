import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import ListProduct from './components/ListProduct/ListProduct';
import Product from './components/Product/Product';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const routes = (
    <Switch>
      <Route exact path="/" component={ListProduct} />
      <Route exact path="/items" component={ListProduct} />
      <Route exact path="/items/:id" component={Product} />
    </Switch>
  );

  return (
    <div className="App">
      <Router>
          <Header />
          {routes}
      </Router>
    </div>
  );
}

export default App;
