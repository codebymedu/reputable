"use server";

import { createClient } from "@reputable/lib/supabase/server";
import { SetupSchema } from "@reputable/schema/setupSchema";

export const setupPortfolio = async (
  _: unknown,
  formData: FormData
): Promise<{
  status: "success" | "error" | null;
  errors?: { displayName?: string[] | undefined; url?: string[] | undefined };
}> => {
  const validatedFields = SetupSchema.safeParse({
    displayName: formData.get("displayName"),
    url: formData.get("url"),
  });

  if (validatedFields.error) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();

  const { data } = await supabase
    .from("portfolios")
    .select("id")
    .eq("url", validatedFields.data.url)
    .single();

  if (data) {
    return {
      status: "error",
      errors: {
        url: ["This portfolio already exists, please try a different URL."],
      },
    };
  }

  const updateUserPromise = supabase.auth.updateUser({
    data: { display_name: validatedFields.data.displayName },
  });

  const createPortfolioPromise = supabase.from("portfolios").insert([
    {
      user_id: (await supabase.auth.getUser()).data.user?.id,
      content: "",
      url: validatedFields.data.url,
    },
  ]);

  const [{ error: updateUserError }, { error: createPortfolioError }] =
    await Promise.all([updateUserPromise, createPortfolioPromise]);

  if (updateUserError || createPortfolioError) {
    return {
      status: "error",
      errors: {
        displayName: updateUserError ? [updateUserError?.message] : undefined,
        url: createPortfolioError ? [createPortfolioError?.message] : undefined,
      },
    };
  }

  return { status: "success" };
};
