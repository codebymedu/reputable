import { createClient } from "@reputable/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  // --- DATA ---

  const { data, error } = await supabase.auth.getUser();

  // --- RENDER ---

  if (error || !data?.user) {
    redirect("/login");
  }

  return <>Home</>;
}
