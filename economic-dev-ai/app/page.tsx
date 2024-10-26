import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Economic Development AI Platform</h1>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button asChild>
          <Link href="/models">View AI Models</Link>
        </Button>
        <Button asChild>
          <Link href="/auth">Login / Sign Up</Link>
        </Button>
      </div>
    </main>
  );
}
