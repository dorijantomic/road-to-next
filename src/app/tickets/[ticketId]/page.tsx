import { notFound } from "next/navigation";

import { TicketItem } from "@/components/features/ticket/components/ticket-item";
import { getTicket } from "@/components/features/ticket/queries/get-ticket";
import { RedirectToast } from "@/components/redirect-toast";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);
  if (!ticket) {
    notFound();
  }

  return (
    <>
      <div className="flex justify-center animated-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
      <RedirectToast />
    </>
  );
};
export default TicketPage;
