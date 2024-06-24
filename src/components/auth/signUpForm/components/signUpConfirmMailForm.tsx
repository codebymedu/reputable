import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@reputable/components/ui/card";
import { useEffect } from "react";
import { createClient } from "@reputable/lib/supabase/client";
import { useRouter } from "next/navigation";

type SignUpConfirmMailFormProps = { handleNextStep: () => void };

export const SignUpConfirmMailForm = ({
  handleNextStep,
}: SignUpConfirmMailFormProps) => {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log({ event });
      if (event === "SIGNED_IN") {
        router.push("/home");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <form action={() => handleNextStep()}>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Confirm your email</CardTitle>

        <CardDescription>
          We&apos;ve sent a confirmation code to your email address. Please
          click the link in your email to activate your account and publish your
          portfolio.
          <p className="mt-4">Your portfolio has been saved!</p>
        </CardDescription>
      </CardHeader>
    </form>
  );
};
