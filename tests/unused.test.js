const request = require("supertest");
const app = require("../server");  // Import the Express app

describe("GET /api/unused", () => {
  it("should return a JSON response with a message", async () => {
    const res = await request(app).get("/api/unused");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("This is an unused route");
  });
});
