import Link from "next/link";
import React from "react";

import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
const TICKET_ICONS = {
  OPEN: "O",
  "IN PROGRESS": ">",
  DONE: "X",
};
const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <div>{TICKET_ICONS[ticket.status]}</div>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sml underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};
export default TicketsPage;
