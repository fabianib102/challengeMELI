import ApiServices from "./ApiServices";

export default class ProductServices {

  header = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  apiServices = new ApiServices(this.header);

  getProductsByName = (name) => {
    return this.apiServices.get(`${process.env.REACT_APP_BASE_URL}/api/items?q=${name}`);
  };

  getProductsById = (id) => {
    return this.apiServices.get(`${process.env.REACT_APP_BASE_URL}/api/items/${id}`);
  }

}