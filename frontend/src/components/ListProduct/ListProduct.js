import React from "react";
import "./ListProduct.css";
import { Link } from "react-router-dom";

function ListProduct({ productList, txtSearch }) {
  const listComponent = () => {
    return productList && productList.length > 0 ? (
      productList.map((item, i) => (
        <Link to={`/items/${item.id}`} className="linkItem" key={i}>
          <div className="row g-0 productItem">
            <div className="col-md-3">
              <img src={item.picture} className="img-fluid imgThumbnail" />
            </div>
            <div className="col-md-6 detailProduct">
              <div className="card-body">
                <h5 className="card-title">${item.price.amount}</h5>
                <p className="card-text">{item.title}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">{item.place}</small>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))
    ) : (
      <h2 className="textFind">{txtSearch}</h2>
    );
  };

  return <div className="card mb-3 container main-card">{listComponent()}</div>;
}

export default ListProduct;
