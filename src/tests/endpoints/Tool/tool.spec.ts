import request from "supertest";
import app, { connection } from "../../../server";

beforeAll(async () => {
  await connection.create();
});

describe("/tools", () => {
  describe("/GET tool", () => {
    it("should return all tools", async (done) => {
      const res = await request(app).get("/");

      expect(res.status).toEqual(200);

      done();
    });
  });

  describe("/POST tool", () => {
    it("should create a new tool", async (done) => {
      const res = await request(app)
        .post("/tool")
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
        .put("/tool/1")
        .send({
          title: "Space X",
          description: "Really nice tool",
          link: "https://google.com.br",
          tags: ["github", "vscode"],
        });

      expect(res.status).toBe(204);

      done();
    });
  });
});
