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
