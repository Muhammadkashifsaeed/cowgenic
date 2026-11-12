"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm font-bold uppercase tracking-widest text-red-600">
        Application Error
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        An unexpected error occurred while rendering this route.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-6 inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#24A176] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D8762]"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        Try again
      </button>
    </main>
  );
}
