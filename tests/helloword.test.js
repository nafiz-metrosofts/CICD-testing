const request = require("supertest");
const app = require("../server"); // Import the app

// describe("GET /", () => {
//   it("should return a 200 status and 'Hello World!' message", async () => {
//     const res = await request(app).get("/"); // Test the root route
//     expect(res.statusCode).toBe(200);
//     expect(res.text).toContain("Hello World!"); // Check the plain text response
//   });
// });

describe("GET /counter", () => {
  it("should return a 200 status and the index.html file", async () => {
    const res = await request(app).get("/counter"); // Test the counter route
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Click Counter"); // Check for specific content in the HTML
  });
});
