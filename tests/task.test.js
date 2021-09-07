const request = require("supertest");
const app = require("../server");


describe("GET /tasks", () => {
  it("respond with a 200 status code", done =>{
    request(app)
      .get('/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});

describe("PUT /tasks/:UUID", () => {
  it("respond with a 200 status code", done => {
    request(app)
      .put('/tasks/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
})



