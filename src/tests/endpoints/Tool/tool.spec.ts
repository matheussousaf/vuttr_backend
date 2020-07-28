import request from "supertest";
import app from "../../../server";

describe("/tools", () => {
  describe("/GET tool", () => {
    it("should return all tools", async () => {
      const res = await request(app).get("/tool");

      expect(res.status).toEqual(204);
    });
  });

  describe("POST tool", () => {
    it("should create a new tool", async () => {
      const res = await request(app).post("/tool").send({
          id: 1,
          
      });
    });
  });
});

it("should return all tools", () => {});
