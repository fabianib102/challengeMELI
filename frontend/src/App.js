import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import ListProduct from "./components/ListProduct/ListProduct";
import Product from "./components/Product/Product";
import ProductServices from "./services/ProductServices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const productServices = new ProductServices();

function App() {
  const [productName, setName] = useState("");
  const [txtSearch, setTxtSearch] = useState("Debes buscar un producto");
  const [productList, setProductList] = useState();

  const getProducts = async (nameTest) => {
    try {
      const res = await productServices.getProductsByName(nameTest);
      if (res.data) {
        if (res.data.items.length === 0) {
          setTxtSearch("No se encontró ningún producto...");
        }
        setProductList(res.data.items);
      }
    } catch (err) {
      console.log("Ocurrio un error: ", err);
    }
  };

  const searchProduct = async () => {
    setTxtSearch("Buscando...");
    setProductList();
    await getProducts(productName);
  };

  const routes = (
    <Switch>
      <Route exact path="/" render={() => <ListProduct productList={productList} txtSearch={txtSearch} />} />
      <Route exact path="/items" render={() => <ListProduct productList={productList} txtSearch={txtSearch} />} />
      <Route exact path="/items/:id" component={Product} />
    </Switch>
  );

  return (
    <div className="App">
      <Router>
        <Header setName={setName} searchProduct={searchProduct} />
        {routes}
      </Router>
    </div>
  );
}

export default App;
