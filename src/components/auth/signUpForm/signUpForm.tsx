"use client";

import { Card, CardFooter } from "@reputable/components/ui/card";
import Link from "next/link";
import { cn } from "@reputable/lib/utils";
import { SignUpCredentialsForm } from "@reputable/components/auth/signUpForm/components/signUpCredentialsForm";
import { SignUpUserDetailsForm } from "@reputable/components/auth/signUpForm/components/signUpUserDetailsForm";
import { SignUpConfirmMailForm } from "@reputable/components/auth/signUpForm/components/signUpConfirmMailForm";
import { useState } from "react";

type SignUpFormProps = { isModal?: boolean };

export const SignUpForm = ({ isModal }: SignUpFormProps) => {
  const [currentStep, setCurrentStep] =
    useState<keyof typeof formStep>("credentials");

  // --- HELPERS ---

  const formStep = {
    credentials: <SignUpCredentialsForm />,
    confirmMail: <SignUpConfirmMailForm />,
    userDetails: <SignUpUserDetailsForm />,
  };

  // --- RENDER ---

  return (
    <div className="flex items-center justify-center">
      <Card
        className={cn("w-full max-w-md", isModal && "border-0 shadow-none")}
      >
        {formStep[currentStep]}

        <CardFooter>
          <p className="w-full text-center text-sm">
            Already have an account?{" "}
            <Link className="underline" href="/login">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};