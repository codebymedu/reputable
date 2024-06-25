import { z } from "zod";

export const SetupSchema = z.object({
  displayName: z
    .string({ message: "Your name is required" })
    .min(3, "A name longer than 3 characters is required!")
    .max(124, "A name shorter than 124 characters is required!"),
  url: z
    .string({ message: "You need a URL to be able to publish your portfolio!" })
    .min(3, "A URL longer than 3 characters is required!")
    .max(124, "A URL shorter than 124 characters is required!"),
});
