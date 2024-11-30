import Link from "next/link";
import React from "react";

import { Placeholder } from "@/components/placeholder";
import { buttonVariants } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((t) => t.id === params.ticketId);
  if (!ticket)
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Link
            href={ticketsPath()}
            className={buttonVariants({ variant: "outline" })}
          >
            <h1 className="ml-2 text-lg font-semibold">Go to Tickets</h1>
          </Link>
        }
      />
    );
  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p>{ticket.content}</p>
    </div>
  );
};
export default TicketPage;
