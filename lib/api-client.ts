import axios, { AxiosError, type AxiosInstance } from "axios";
import { publicEnv } from "@/lib/env";
import type { ApiError } from "@/types";

/**
 * Shared Axios HTTP client configured for frontend-to-API integration.
 * Replace or extend interceptors here when adding auth tokens or telemetry.
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: publicEnv.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(normalizeApiError(error)),
);

/**
 * Converts Axios or unknown errors into a consistent ApiError shape.
 */
export function normalizeApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{
      message?: string;
      code?: string;
      details?: Record<string, string[]>;
    }>;

    const statusCode = axiosError.response?.status ?? 500;
    const data = axiosError.response?.data;

    return {
      message:
        data?.message ??
        axiosError.message ??
        "Unable to complete the API request.",
      statusCode,
      code: data?.code ?? axiosError.code,
      details: data?.details,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      statusCode: 500,
    };
  }

  return {
    message: "An unexpected network error occurred.",
    statusCode: 500,
  };
}

