import React, {useState, useEffect} from 'react';
import ProductServices from '../../services/ProductServices';
import { useParams } from "react-router";

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
        console.log(res.data.item);
        setDetailData(res.data.item);
        setPrice(res.data.item.price)
      }
    } catch (err) {
      console.log("Ocurrio un error: ", err);
    }
  };

  return (
    <div className="row g-0 productItem">
        <div className="col-md-3">
          <img src={detail.picture} className="img-fluid imgThumbnail" />
        </div>
        <div className="col-md-6 detailProduct">
          <div className="card-body">
            <h5 className="card-title">{price.amount}</h5>
            <p className="card-text">{detail.title}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <p className="card-text">
              <small className="text-muted">{detail.description}</small>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Product;