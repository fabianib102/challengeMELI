import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

function Product() {

  const { code } = useParams();
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    getProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductData = async () => {
    try {
      const res = await productServices.getProductsByName();
      if (res.data) {
        console.log(res.data);
        setDataProduct(res.data);
      }
    } catch (err) {
      console.log("Ocurrio un error: ", err);
    }
  };

  return (
    <div>
      The product
    </div>
  );
}

export default Product;