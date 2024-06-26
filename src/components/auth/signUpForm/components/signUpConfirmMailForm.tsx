import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@reputable/components/ui/card";
import { useEffect } from "react";
import { createClient } from "@reputable/lib/supabase/client";
import { useRouter } from "next/navigation";

export const SignUpConfirmMailForm = () => {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/home");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  // --- RENDER ---

  return (
    <form>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Confirm your email</CardTitle>

        <CardDescription>
          We&apos;ve sent an email to you. Click the link there to activate your
          account.
          <p className="mt-4 text-red-400">
            No email will be sent if this account already exists.
          </p>
        </CardDescription>
      </CardHeader>
    </form>
  );
};
