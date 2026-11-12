import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm font-bold uppercase tracking-widest text-[#24A176]">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        The route you requested does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#24A176] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D8762]"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to Home
      </Link>
    </main>
  );
}
