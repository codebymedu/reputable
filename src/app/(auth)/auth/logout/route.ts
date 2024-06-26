import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@reputable/lib/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();

  const { origin } = new URL(request.url);

  await supabase.auth.signOut();

  return NextResponse.redirect(`${origin}/login`);
}
