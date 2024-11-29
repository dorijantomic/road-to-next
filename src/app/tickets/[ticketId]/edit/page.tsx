import React from "react";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketEditPage = ({ params }: TicketPageProps) => {
  return <div>Ticket Page {params.ticketId}</div>;
};
export default TicketEditPage;
