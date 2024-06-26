import { z } from "zod";

export const UserCredentialsSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email("A valid email is required!"),
  password: z
    .string({ message: "Password is required" })
    .min(6, "A password longer than 6 characters is required!")
    .max(124, "A password shorter than 124 characters is required!"),
});
