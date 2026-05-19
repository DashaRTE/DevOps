const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("responds with json and success status", async () => {
    const response = await request(app).get("/");
    // Перевіряємо, чи статус 200 (OK)
    expect(response.statusCode).toBe(200);
    // Перевіряємо, чи правильне слово у відповіді
    expect(response.body.status).toBe("success");
  });
});
