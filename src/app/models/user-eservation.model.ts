import { Cart } from "./cart.models";
import { Research } from "./research.model";
import { Ticket } from "./ticket.model";

export interface UserReservation{
    sessionDTO: Research;
    cartDTO: Cart;
    ticketDTO: Ticket;
}