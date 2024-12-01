import Link from "next/link";
import React from "react";

import { TicketItem } from "@/components/features/ticket/components/ticket-item";
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
  const t = initialTickets.find((t) => t.id === params.ticketId);
  if (!t)
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
    <div className="flex justify-center animated-fade-in-from-top">
      <TicketItem ticket={t} isDetail />
    </div>
  );
};
export default TicketPage;
