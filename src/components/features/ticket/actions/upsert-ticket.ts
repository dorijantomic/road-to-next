"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { setCookieByKey } from "@/actions/cookies";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";
import { toCent } from "@/utils/currency";

import { isOwner } from "../../auth/utils/is-owner";
import { getAuthOrRedirect } from "../queries/get-auth-or-redirect";

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Is required"),
  bounty: z.coerce.number().positive(),
});

//Inserts a new ticket if it doesn't exist or updates it if it does.
export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  const { user } = await getAuthOrRedirect();

  try {
    if (!id) {
      const ticket = await prisma.ticket.findUnique({
        where: {
          id,
        },
      });
      if (!ticket || !isOwner(user, ticket)) {
        return toActionState("Not authorized", "ERROR");
      }
    }
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    });

    const dbData = {
      ...data,
      userId: user.id,
      bounty: toCent(data.bounty),
    };
    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      update: dbData,
      create: dbData,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }
  revalidatePath(ticketsPath());
  if (id) {
    await setCookieByKey("toast", "Ticket updated");
    redirect(ticketPath(id));
  }
  return toActionState("Ticket created", "SUCCESS");
};
