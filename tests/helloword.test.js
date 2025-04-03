const request = require("supertest");
const app = require("../server"); // Import the app

describe("GET /", () => {
  it("should return a 200 status and 'Click Counter' message", async () => {
    const res = await request(app).get("/"); // Test the root route
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Click Counter");
  });
});
