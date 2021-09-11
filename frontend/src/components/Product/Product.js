import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ProductServices from "../../services/ProductServices";
import { useParams } from "react-router";
import "./Product.css";

const productServices = new ProductServices();

function Product() {
  const { id } = useParams();
  const [detail, setDetailData] = useState({});
  const [price, setPrice] = useState({});

  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductById = async () => {
    try {
      const res = await productServices.getProductsById(id);
      if (res.data) {
        setDetailData(res.data.item);
        setPrice(res.data.item.price);
      }
    } catch (err) {
      console.log("Ocurrio un error: ", err);
    }
  };

  return (
    <div className="container containerProduct">
      <div className="row g-0 singleProduct">
        <div className="col-md-8">
          <img src={detail.picture} className="img-fluid" />
        </div>
        <div className="col-md-4 productDetail">
          <div className="card-body">
            <h3 className="card-text">{detail.title}</h3>
            <h1 className="card-title">$ {price.amount}</h1>
            <Button variant="primary" className="btnBuy">Comprar</Button>
          </div>
        </div>
        <div className="row g-0">
          <div className="card-body">
            <div className="card-text productDescription">
              <h3>Descripcion del producto</h3>
              <p className="text-muted textDesc">{detail.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
