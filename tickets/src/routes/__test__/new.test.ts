import request from "supertest";
import { app } from "../../app";

it("has a route handler listening to /api/tickets for post request", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).toEqual(200);
});
it("can only be accessed if the user is signed in", async () => {});
it("return an error if an invalid title is provided", async () => {});
it("return an error if an invalid price is provided", async () => {});
it("create a ticket with valid inputs", async () => {});
