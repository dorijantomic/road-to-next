import { Suspense } from "react";

import { CardCompact } from "@/components/card-compact";
import { TicketList } from "@/components/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/components/features/ticket/components/ticket-upsert-form";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { RedirectToast } from "@/components/redirect-toast";

const TicketsPage = () => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Tickets" description="All your tickets at one place" />
        <CardCompact
          title="Create Ticket"
          description="A new ticket will be created"
          content={<TicketUpsertForm />}
        />
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
      <RedirectToast />
    </>
  );
};
export default TicketsPage;
