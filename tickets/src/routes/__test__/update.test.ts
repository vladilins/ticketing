import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("return a 404 if the provided id does not exist", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", global.signin())
    .send({
      title: "awgwegwag",
      price: 20,
    })
    .expect(404);
});
it("return 401 if the use is not authenticated", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({
      title: "awgwegwag",
      price: 20,
    })
    .expect(401);
});
it("return 401 if the use does not own the ticket", async () => {});
it("return 400 if the user provides invalid data", async () => {});
it("updates the ticket provided valid data", async () => {});
