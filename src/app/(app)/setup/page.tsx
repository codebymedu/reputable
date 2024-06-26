import { SetupForm } from "@reputable/components/app/setupForm";
import { createClient } from "@reputable/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Setup() {
  const supabase = createClient();

  // --- DATA ---

  const { data, error } = await supabase.auth.getUser();

  // --- RENDER ---

  if (error || !data?.user) {
    redirect("/login");
  }

  if (data?.user.user_metadata.display_name) {
    redirect("/home");
  }

  // --- RENDER ---

  return (
    <div className="container max-w-[500px] mt-16">
      <SetupForm />
    </div>
  );
}
