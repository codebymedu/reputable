import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@reputable/components/ui/card";
import { Label } from "@reputable/components/ui/label";
import { Input } from "@reputable/components/ui/input";
import { Button } from "@reputable/components/ui/button";
import { useFormState } from "react-dom";
import { createUser } from "@reputable/actions/auth/signUpActions";
import Link from "next/link";
import { SignUpCredentialsFormSubmitButton } from "@reputable/components/auth/signUpForm/components/signUpCredentialsFormSubmitButton";
import { createClient } from "@reputable/lib/supabase/client";
import { MouseEventHandler } from "react";

type SignUpCredentialsFormProps = { handleNextStep: () => void };

export const SignUpCredentialsForm = ({
  handleNextStep,
}: SignUpCredentialsFormProps) => {
  const supabase = createClient();

  // --- STATE ---

  const [formState, dispatchCreateUser] = useFormState(
    (state: Awaited<ReturnType<typeof createUser>>, formState: FormData) =>
      createUser(state, formState).then((updatedFormState) => {
        if (updatedFormState.status === "success") {
          handleNextStep();
        }

        return updatedFormState;
      }),
    { status: null }
  );

  const handleGoogleSignUp: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `https://reputable.so/auth/callback`,
      },
    });
  };

  // --- RENDER ---

  return (
    <form action={dispatchCreateUser}>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Create your account</CardTitle>

        <CardDescription>Let the fun begin!</CardDescription>
      </CardHeader>

      <CardContent>
        <Button
          variant="outline"
          className="w-full gap-2 flex"
          onClick={handleGoogleSignUp}
        >
          <GoogleIcon />
          Sign up with Google
        </Button>

        <p className="text-center w-full my-4">or</p>

        {formState?.errors?.general?.[0] && (
          <p className="text-red-500 text-xs mt-1">
            {formState?.errors?.general?.[0]}
          </p>
        )}

        <div className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full"
              errorMessage={formState.errors?.email?.[0]}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full"
              errorMessage={formState.errors?.password?.[0]}
            />
          </div>
        </div>

        <SignUpCredentialsFormSubmitButton />
      </CardContent>

      <CardFooter>
        <p className="w-full text-center text-sm">
          Already have an account?{" "}
          <Link className="underline" href="/login">
            Log in
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

function GoogleIcon() {
  return (
    <svg
      fill="#000000"
      height="16px"
      width="16px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 210 210"
    >
      <path
        d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
      c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
      S0,162.897,0,105z"
      />
    </svg>
  );
}
