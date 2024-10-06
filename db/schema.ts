import { text } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { pgEnum, pgTable, serial, integer } from "drizzle-orm/pg-core";

import { AVAILABLE_STATUSES } from "@/consts";

export type Status = (typeof AVAILABLE_STATUSES)[number]["id"];

const statuses = AVAILABLE_STATUSES.map(({ id }) => id) as Array<Status>;

export const statusEnum = pgEnum(
  "status",
  statuses as [Status, ...Array<Status>]
);

export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createTs: timestamp("createTs", { withTimezone: true })
    .defaultNow()
    .notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
  status: statusEnum("status").notNull(),
});

export const Customers = pgTable("customers", {
  id: serial("id").primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  userId: text("userId").notNull(),
  organizationId: text("organizationId"),
});
