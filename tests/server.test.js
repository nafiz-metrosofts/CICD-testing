const request = require("supertest");
const app = require("../server");

describe("Server Tests", () => {
  afterAll(() => {
    app.close();  // Ensure the server is properly closed
  });

  // ✅ Test: Root route
  it("should return Hello World on GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World!");
  });

  // ✅ Test: Counter HTML
  it("should return counter page on GET /counter", async () => {
    const res = await request(app).get("/counter");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Click Counter");
  });

  // ✅ Test: API Counter GET
  it("should return the counter value on GET /api/counter", async () => {
    const res = await request(app).get("/api/counter");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("count");
  });

  // ✅ Test: API Counter Increment
  it("should increment counter on POST /api/counter/increment", async () => {
    const resBefore = await request(app).get("/api/counter");
    const initialCount = resBefore.body.count;

    await request(app).post("/api/counter/increment");

    const resAfter = await request(app).get("/api/counter");
    expect(resAfter.body.count).toBe(initialCount + 1);
  });

  // ✅ Test: 404 Handler
  it("should return 404 on invalid route", async () => {
    const res = await request(app).get("/invalid-route");
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe("Not Found");
  });
});
