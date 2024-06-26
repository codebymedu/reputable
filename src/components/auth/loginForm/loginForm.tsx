"use client";

import { loginUser } from "@reputable/actions/auth/loginActions";
import { Button } from "@reputable/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@reputable/components/ui/card";
import { Input } from "@reputable/components/ui/input";
import { Label } from "@reputable/components/ui/label";
import { createClient } from "@reputable/lib/supabase/client";
import { cn } from "@reputable/lib/utils";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const supabase = createClient();

  // --- STATE ---

  const [formState, dispatchLoginUser] = useFormState(
    (state: Awaited<ReturnType<typeof loginUser>>, formState: FormData) =>
      loginUser(state, formState),
    { status: null }
  );

  const handleGoogleSignIn: MouseEventHandler<HTMLButtonElement> = async (
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
    <div className="flex items-center justify-center">
      <Card className={cn("w-full max-w-md")}>
        <form action={dispatchLoginUser}>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>

            <CardDescription>One step at a time!</CardDescription>
          </CardHeader>

          <CardContent>
            <Button
              variant="outline"
              className="w-full gap-2 flex"
              onClick={handleGoogleSignIn}
            >
              <GoogleIcon />
              Sign in with Google
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

            <Button type="submit" className="w-full mt-6">
              Create Account
            </Button>
          </CardContent>

          <CardFooter>
            <p className="w-full text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link className="underline" href="/signup">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
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
