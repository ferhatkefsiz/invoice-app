"use server";

import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";
import { Customers, Invoices } from "@/db/schema";
import { Resend } from "resend";
import { redirect } from "next/navigation";
import InvoiceCreatedEmail from "@/emails/invoice-created";

// const stripe = new Stripe(String(process.env.STRIPE_API_SECRET));
const resend = new Resend(process.env.RESEND_API_KEY);

export async function createAction(formData: FormData) {
  const { userId, orgId } = auth();

  // Creation disabled for demo
  if (userId !== process.env.ME_ID) return;

  if (!userId) {
    return;
  }

  const value = Math.floor(
    Number.parseFloat(String(formData.get("value"))) * 100
  );

  const description = formData.get("description") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const [customer] = await db
    .insert(Customers)
    .values({
      name,
      email,
      userId,
      organizationId: orgId || null,
    })
    .returning({
      id: Customers.id,
    });

  const results = await db
    .insert(Invoices)
    .values({
      value,
      description,
      userId,
      customerId: customer.id,
      status: "open",
      organizationId: orgId || null,
    })
    .returning({
      id: Invoices.id,
    });

  await resend.emails.send({
    from: "Ferhat Kefsiz <hi@ferhat.io>",
    to: [email],
    subject: "You Have a New Invoice",
    react: InvoiceCreatedEmail({ invoiceId: results[0].id }),
  });

  redirect(`/invoices/${results[0].id}`);
}
