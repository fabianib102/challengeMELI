const axios = require('axios').default;

export default class ApiServices {

  constructor(headers) {
    this.client = axios.create({headers});
  }

  get = (endpoint)=>{
    return this.client.get(endpoint);
  }
}