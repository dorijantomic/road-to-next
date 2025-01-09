import { notFound } from "next/navigation";

import { CardCompact } from "@/components/card-compact";
import { getAuth } from "@/components/features/auth/queries/get-auth";
import { isOwner } from "@/components/features/auth/utils/is-owner";
import { TicketUpsertForm } from "@/components/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/components/features/ticket/queries/get-ticket";

type TicketEditPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { ticketId } = await params;
  const { user } = await getAuth();
  const ticket = await getTicket(ticketId);

  const isTicketFound = !!ticket;
  const isTicketOwner = isOwner(user, ticket);

  if (!isTicketFound || !isTicketOwner) {
    notFound();
  }

  return (
    <div className="flex justify-center">
      <CardCompact
        title="Edit Ticket"
        description="Edit an existing ticket"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
};
export default TicketEditPage;
