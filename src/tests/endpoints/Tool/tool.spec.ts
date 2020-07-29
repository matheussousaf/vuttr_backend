import request from "supertest";
import app from "../../../server";
import { connection } from "../../../db";

beforeAll(async () => {
  await connection.create();
});

// Endpoint for Tools
describe("/tools", () => {

  describe("/GET tool", () => {
    it("should return all tools", async (done) => {
      const res = await request(app).get("/tools");

      expect(res.status).toBe(200);

      done();
    });
  });

  describe("/POST tool", () => {
    it("should create a new tool", async (done) => {
      const res = await request(app)
        .post("/tools")
        .send({
          id: 1,
          title: "4zz2",
          description: "Really nice tool",
          link: "https://google.com.br",
          tags: ["github", "cool"],
        });

      expect(res.status).toBe(201);

      done();
    });
  });

  describe("/PUT tool", () => {
    it("should edit a existent tool", async (done) => {
      const res = await request(app)
        .put("/tools/1")
        .send({
          title: "Space X",
          description: "Really nice tool",
          link: "https://google.com.br",
          tags: ["github", "vscode"],
        });

      expect(res.status).toBe(200);

      done();
    });
  });
});
