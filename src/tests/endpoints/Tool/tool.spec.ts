import request from "supertest";

beforeAll(async done => {
  const server = app.listen(4000, () => {
    done();
  });
});

describe("/tools", () => {
  describe("/GET tool", () => {
    
    afterEach(() => {
      jest.useFakeTimers();
    });
    
    it("should return all tools", async () => {
      const res = await request(app).get("/");

      expect(res.status).toEqual(404);
    });
  });

  // describe("POST tool", () => {
  //   it("should create a new tool", async () => {
  //     const res = await request(app)
  //       .post("/tool")
  //       .send({
  //         id: 1,
  //         title: "4zz2",
  //         description: "Really nice tool",
  //         link: "https://google.com.br",
  //         tags: ["github", "cool"],
  //       });

  //     expect(res.status).toBe(201);
  //   });
  // });
});
