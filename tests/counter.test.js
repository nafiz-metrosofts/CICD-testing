const request = require("supertest");
const app = require("../server");  // Import the Express app

describe("GET /counter", () => {
  it("should return a 200 status and contain 'Click Counter' message", async () => {
    const res = await request(app).get("/counter");
    expect(res.statusCode).toBe(200);  // Ensure status is 200 OK
    expect(res.text).toContain("Click Counter");  // Check for 'Click Counter' in HTML
  });

  it("should have a button with 'Click Me' text", async () => {
    const res = await request(app).get("/counter");
    expect(res.text).toContain('<button id="clickButton">Click Me</button>');  // Ensure button is present
  });

  it("should return valid HTML structure", async () => {
    const res = await request(app).get("/counter");
    expect(res.text).toMatch(/<!DOCTYPE html>/);  // Ensure the response is a valid HTML document
    expect(res.text).toContain("<h1>Click Counter</h1>");  // Check for header
  });
});
