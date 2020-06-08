import { Publisher, TicketUpdatedEvent, Subjects } from "@vtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
