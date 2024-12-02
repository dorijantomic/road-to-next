"use client";
import { TicketItem } from "@/components/features/ticket/components/ticket-item";
import { getTickets } from "@/components/features/ticket/queries/get-tickets";
import { Ticket } from "@/components/features/ticket/types";
import { Heading } from "@/components/heading";
import { initialTickets } from "@/data";
import { useEffect, useState } from "react";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTickets();
      setTickets(result);
    };
    fetchTickets();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
