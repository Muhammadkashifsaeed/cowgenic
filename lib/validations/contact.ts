import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number must be 30 characters or fewer.")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be 500 characters or fewer."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

