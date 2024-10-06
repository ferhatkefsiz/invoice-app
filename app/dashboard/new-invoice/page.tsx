"use client";

import { type SyntheticEvent, useState } from "react";
import { useFormStatus } from "react-dom";

import { createAction } from "@/app/actions";

import { LoaderCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function NewInvoicePage() {
  const { pending } = useFormStatus();

  const [state, setState] = useState("ready");
  const [error, setError] = useState<string>();

  async function handleOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setError("Submission disabled for demo.");
    return;

    if (state === "pending") {
      event.preventDefault();
      return;
    }
    setState("pending");
  }

  return (
    <main className="max-w-5xl mx-auto px-5">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl tracking-tighter font-semibold">
          Create a new invoice
        </h1>
      </div>

      <form
        action={createAction}
        onSubmit={handleOnSubmit}
        className="grid gap-4 max-w-xs mt-4"
      >
        {error && (
          <p className="bg-red-100 text-sm text-red-800 text-center px-3 py-2 rounded-lg">
            {error}
          </p>
        )}

        <div>
          <Label htmlFor="name" className="block font-semibold text-sm mb-2">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>

        <div>
          <Label htmlFor="email" className="block font-semibold text-sm mb-2">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>

        <div>
          <Label htmlFor="amount" className="block font-semibold text-sm mb-2">
            Amount
          </Label>
          <Input id="amount" name="amount" type="text" />
        </div>

        <div>
          <Label
            htmlFor="description"
            className="block font-semibold text-sm mb-2"
          >
            Description
          </Label>
          <Textarea id="description" name="description" />
        </div>

        <div>
          <Button className="relative w-full font-semibold">
            <span className={pending ? "text-transparent" : ""}>Submit</span>
            {pending && (
              <span className="absolute flex items-center justify-center w-full h-full text-gray-400">
                <LoaderCircle className="animate-spin" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </main>
  );
}
