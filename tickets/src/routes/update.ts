import express, { Request, Response } from "express";
import { body, Result } from "express-validator";
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from "@vtickets/common";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.put(
  "/api/tickets/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundError();
    }

    if (ticket.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    return res.send(ticket);
  }
);

export { router as updateTicketRouter };
