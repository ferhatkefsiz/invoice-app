import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-5 flex justify-center">
      <SignUp />
    </div>
  );
}
