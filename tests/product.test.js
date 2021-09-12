const request = require("supertest");
const app = require("../server");


describe("GET /api/items?q=iphone", () => {
  it("respond with a 200 status code", done =>{
    request(app)
      .get('/api/items?q=iphone')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});

describe("GET /api/items/MLA1100842300", () => {
  it("respond with a 200 status code", done =>{
    request(app)
      .get('/api/items/MLA1100842300')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});


