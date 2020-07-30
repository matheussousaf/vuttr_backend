import request from "supertest";
import app from "../../server";
import { connection } from "../../db";

beforeAll(async () => {
  await connection.create();
});

afterAll(() => {
  return connection.dropDatabase();
});


// Testing Endpoint for Tools
describe("/tools", () => {

  describe("/GET tools", () => {
    it("should return all tools", async (done) => {
      const res = await request(app).get("/tools");

      expect(res.status).toBe(200);

      done();
    });
  });

  describe("/POST tools", () => {
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

  describe("/PUT tools/:id", () => {
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

  describe("/GET tools/:id", () => {
    it("should return a single tool", async (done) => {
      const res = await request(app).get("/tools/1");

      expect(res.status).toBe(200);

      done();
    });
  });

  describe("/DELETE tools/:id", () => {
    it("should delete a tool", async (done) => {
      const res = await request(app).delete("/tools/1");

      expect(res.status).toBe(204);

      done();
    });
  });
});
