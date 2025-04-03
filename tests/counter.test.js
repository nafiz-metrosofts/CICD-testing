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

  // Failing test (should be 0, but we expect 1 for the test to fail)
  it("should return counter value as 1", async () => {
    const res = await request(app).get("/counter");
    expect(res.text).toContain("Clicks: 1"); // This will fail since the initial value is 0
  });
});

describe("POST /api/counter/increment", () => {
  it("should increment counter by 1", async () => {
    const res = await request(app).post("/api/counter/increment");
    expect(res.statusCode).toBe(200);
    expect(res.body.count).toBe(1); // Fail this test if counter increment logic is wrong
  });
});
