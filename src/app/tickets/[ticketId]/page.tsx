import React from "react";

import { initialTickets } from "@/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((t) => t.id === params.ticketId);
  if (!ticket) return <div>No ticket found</div>;
  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p>{ticket.content}</p>
    </div>
  );
};
export default TicketPage;
