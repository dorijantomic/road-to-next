import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { buttonVariants } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
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
}
