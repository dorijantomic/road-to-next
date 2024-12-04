import { notFound } from "next/navigation";

import { TicketItem } from "@/components/features/ticket/components/ticket-item";
import { getTicket } from "@/components/features/ticket/queries/get-ticket";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const t = await getTicket(params.ticketId);
  if (!t) {
    notFound();
  }

  return (
    <div className="flex justify-center animated-fade-in-from-top">
      <TicketItem ticket={t} isDetail />
    </div>
  );
};
export default TicketPage;
