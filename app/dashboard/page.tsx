import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";

const invoices = [
  {
    invoice: "INV001",
    customer: "John Doe",
    email: "fly@planet.com",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    customer: "John Doe",
    email: "fly@planet.com",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    customer: "John Doe",
    email: "fly@planet.com",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    customer: "John Doe",
    email: "fly@planet.com",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    customer: "John Doe",
    email: "fly@planet.com",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    customer: "John Doe",
    email: "fly@planet.com",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    customer: "John Doe",
    email: "fly@planet.com",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Dashboard() {
  return (
    <main className="max-w-5xl mx-auto px-5">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl tracking-tighter font-semibold">Invoices</h1>

        <Button
          size="sm"
          className="inline-flex gap-2"
          variant="outline"
          asChild
        >
          <Link href="/dashboard/new-invoice">
            <CirclePlusIcon className="w-4 h-4 " />
            <span>New Invoice</span>
          </Link>
        </Button>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.email}</TableCell>

              <TableCell>
                <Badge variant="outline">{invoice.paymentStatus}</Badge>
              </TableCell>

              <TableCell className="text-right font-semibold">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}
