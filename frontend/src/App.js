import React, {useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import ListProduct from './components/ListProduct/ListProduct';
import Product from './components/Product/Product';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [name, setName] = useState("");
  const [cont, setCont] = useState(0);

  const routes = (
    <Switch>
      {/* <Route exact path="/" component={ListProduct} /> */}
      {/* <Route exact path="/items" component={ListProduct} /> */}
      <Route exact path="/" render={ ()=> <ListProduct name={name}/> } />
      <Route exact path="/items" render={ ()=> <ListProduct name={name}/> } />
      <Route exact path="/items/:id" component={Product} />
    </Switch>
  );

  return (
    <div className="App">
      <Router>
          <Header setName={setName} />
          {routes}
      </Router>
    </div>
  );
}

export default App;
