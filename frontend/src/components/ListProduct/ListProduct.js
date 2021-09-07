import React, { useEffect, useState } from "react";
import ProductServices from "../../services/ProductServices";
import "./ListProduct.css"

const productServices = new ProductServices();

function ListProduct() {

  const [productList, setProductList] = useState();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProducts = async () => {
    try {
      const res = await productServices.getProductsByName();
      if (res.data) {
        console.log(res.data.results);
        setProductList(res.data.results);
      }
    } catch (err) {
      console.log("Ocurrio un error: ", err);
    }
  };

  const listComponent = () => {
    return productList && productList.length > 0
    ? productList.map((item, i) => (
      <div className="row g-0 productItem" key={i}>
        <div className="col-md-3">
          <img src={item.thumbnail} className="img-fluid imgThumbnail" />
        </div>
        <div className="col-md-6 detailProduct">
          <div className="card-body">
            <h5 className="card-title">$ 1800</h5>
            <p className="card-text">{item.title}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <p className="card-text">
              <small className="text-muted">{item.address.state_name}</small>
            </p>
          </div>
        </div>
      </div>
      ))
    : " No products available";
  }

  return (
    <div className="card mb-3 container main-card">
      {listComponent()}
    </div>
  );
}

export default ListProduct;
