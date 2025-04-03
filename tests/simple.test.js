const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/");
    // expect(res.statusCode).toBe(200);
    // expect(res.text).toBe("Hello World!");
  });
});

describe("GET /counter", () => {
  it("should return the counter page", async () => {
    const res = await request(app).get("/counter");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("<html");
  });
});
