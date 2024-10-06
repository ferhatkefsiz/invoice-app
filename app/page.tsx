import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-5 min-h-screen flex flex-col justify-center h-full text-center items-center">
      <h1 className="text-5xl font-bold">Invoice App</h1>
      <Button asChild>
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </main>
  );
}
