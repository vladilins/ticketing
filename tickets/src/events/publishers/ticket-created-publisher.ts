import { Publisher, TicketCreatedEvent, Subjects } from "@vtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
   subject: Subjects.TicketCreated = Subjects.TicketCreated
}