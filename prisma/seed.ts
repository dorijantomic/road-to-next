import { hash } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const users = [
  {
    username: "admin",
    email: "admin@admin.com",
  },
  {
    username: "user",
    email: "dorijan11@gmail.com",
  },
];
const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database",
    status: "DONE" as const,
    bounty: 499,
    deadline: new Date().toISOString().split("T")[0],
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database",
    status: "OPEN" as const,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database",
    status: "IN_PROGRESS" as const,
    bounty: 599,
    deadline: new Date().toISOString().split("T")[0],
  },
];

const seed = async () => {
  console.log("DB Seed: Started...");
  const t0 = performance.now();
  await prisma.ticket.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await hash("secret");

  const seededUsers = await prisma.user.createManyAndReturn({
    data: users.map((user) => ({ ...user, passwordHash })),
  });
  await prisma.ticket.createMany({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: seededUsers[0].id,
    })),
  });
  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
