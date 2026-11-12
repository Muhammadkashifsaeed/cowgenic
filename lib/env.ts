import { z } from "zod";

const vercelProdUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

const vercelPreviewUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : undefined;

const defaultAppUrl =
  vercelProdUrl ??
  vercelPreviewUrl ??
  (process.env.NODE_ENV === "production"
    ? "https://cowgenic.com"
    : "http://localhost:3000");

const publicEnvSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("Cowgenic"),
  NEXT_PUBLIC_APP_URL: z.url().default(defaultAppUrl),
  NEXT_PUBLIC_API_BASE_URL: z.string().min(1).default("/api"),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().min(1).default("923211044549"),
});

/**
 * Public environment variables safe for both Server and Client Components.
 * Keys must be accessed statically so Next.js can inline them at build time.
 */
export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || undefined,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || undefined,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || undefined,
  NEXT_PUBLIC_WHATSAPP_NUMBER:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || undefined,
});

const serverEnvSchema = z.object({
  API_SECRET_KEY: z.string().optional(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

/**
 * Server-only environment reader. Never call from Client Components.
 */
export function getServerEnv() {
  if (typeof window !== "undefined") {
    throw new Error("getServerEnv() cannot be called in a browser context.");
  }

  return serverEnvSchema.parse({
    API_SECRET_KEY: process.env.API_SECRET_KEY || undefined,
    NODE_ENV: process.env.NODE_ENV,
  });
}
