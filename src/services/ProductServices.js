import ApiServices from "./ApiServices";

export default class ProductServices {

  header = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  apiServices = new ApiServices(this.header);

  getProductsByName = () => {
    return this.apiServices.get(`${process.env.REACT_APP_BASE_URL}/search?q=:iphone#json`);
  };

  getProductsByCode = (code) => {
    return this.apiServices.get(`${process.env.REACT_APP_BASE_URL}/alpha/${code}`);
  }

}