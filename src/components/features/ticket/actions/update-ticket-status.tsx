"use server";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { setCookieByKey } from "@/actions/cookies";
import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
  try {
    await prisma.ticket.update({
      where: { id },
      data: { status },
    });
  } catch (err) {
    return fromErrorToActionState(err);
  }
  revalidatePath(ticketsPath());
  await setCookieByKey("toast", "Ticket updated");
  return toActionState("Status updated", "SUCCESS");
};
