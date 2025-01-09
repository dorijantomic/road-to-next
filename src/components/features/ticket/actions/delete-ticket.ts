"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { setCookieByKey } from "@/actions/cookies";
import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

import { isOwner } from "../../auth/utils/is-owner";
import { getAuthOrRedirect } from "../queries/get-auth-or-redirect";

export const deleteTicket = async (id: string) => {
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
    await prisma.ticket.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath(ticketsPath());
  await setCookieByKey("toast", "Ticket deleted");
  redirect(ticketsPath());
};
