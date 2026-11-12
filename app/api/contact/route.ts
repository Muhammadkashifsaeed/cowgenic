import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON request body.",
      },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed.",
        details: z.flattenError(parsed.error).fieldErrors,
      },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Payload validated and received.",
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        receivedAt: new Date().toISOString(),
      },
    },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}
