const request = require("supertest");
const app = require("./index.js");

describe("GET /", () => {
  it("should return 200 OK if users in DB", () => {
    return request(app)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
describe("GET /", () => {
  it("should return JSON DATA", () => {
    return request(app)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/json/);
        expect(res.type).toBe("application/json");
      });
  });
});
/////////////////////////////////////////////////////
describe("GET /:id", () => {
  it("should return 200 OK if users in DB", () => {
    return request(app)
      .get("/0")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
describe("GET /:id", () => {
  it("should return JSON DATA", () => {
    return request(app)
      .get("/0")
      .then(res => {
        expect(res.type).toMatch(/json/);
        expect(res.type).toBe("application/json");
      });
  });
});
////////////////////////////////////////////////////////
describe("GET /hello/:id", () => {
  it("should return 200 OK if users in DB", () => {
    return request(app)
      .get("/hello/0")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
describe("GET /hello/:id", () => {
  it("should return JSON DATA", () => {
    return request(app)
      .get("/hello/0")
      .then(res => {
        expect(res.type).toMatch(/json/);
        expect(res.type).toBe("application/json");
      });
  });
});
////////////////////////////////////////////////////////
describe("POST /", () => {
  it("should return 201 OK if user can be added to database", () => {
    return request(app)
      .post("/")
      .send({ name: "bob", age: 12 })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
});
describe("POST /", () => {
  it("should return JSON DATA", () => {
    return request(app)
      .post("/")
      .send({ name: "bob", age: 12 })
      .then(res => {
        expect(res.type).toMatch(/json/);
        expect(res.type).toBe("application/json");
      });
  });
});
////////////////////////////////////////////////////////
describe("DELETE /:id", () => {
  it("should return 204 OK if user is in DB", () => {
    return request(app)
      .delete("/0")
      .then(res => {
        expect(res.status).toBe(204);
      });
  });
});
////////////////////////////////////////////////////////
