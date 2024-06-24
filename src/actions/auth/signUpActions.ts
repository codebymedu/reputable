"use server";

import { createClient } from "@reputable/lib/supabase/server";
import { UserCredentialsSchema } from "@reputable/schema/authSchema";

export const createUser = async (
  _: unknown,
  formData: FormData
): Promise<{
  status: null | "success" | "error";
  errors?: {
    email?: string[] | undefined;
    password?: string[] | undefined;
    general?: string[];
  };
}> => {
  const validatedFields = UserCredentialsSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validatedFields.error) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signUp(validatedFields.data);

  if (error) {
    return { status: "error", errors: { general: [error.message] } };
  }

  return { status: "success" };
};
