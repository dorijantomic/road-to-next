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

import { isOwner } from "../../auth/utils/is-owner";
import { getAuthOrRedirect } from "../queries/get-auth-or-redirect";

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
  const { user } = await getAuthOrRedirect();
  try {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id,
      },
    });

    if (!ticket || !isOwner(user, ticket)) {
      return toActionState("Not authorized", "ERROR");
    }

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
