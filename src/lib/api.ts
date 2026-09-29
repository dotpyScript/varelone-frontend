import axios from "axios";
import type { ContactPayload } from "./contact";

export const api = axios.create({
  baseURL: "/api",
  timeout: 15_000,
  headers: { "Content-Type": "application/json" },
});

export async function submitContact(payload: ContactPayload) {
  const { data } = await api.post<{ ok: true }>("/contact", payload);
  return data;
}

export function apiErrorMessage(error: unknown, fallback: string) {
  if (axios.isAxiosError(error)) {
    const message = (error.response?.data as { message?: string } | undefined)?.message;
    if (message) return message;
    if (error.code === "ECONNABORTED") return "The request timed out. Please try again.";
  }
  return fallback;
}
