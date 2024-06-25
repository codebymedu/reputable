"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@reputable/components/ui/card";
import { Label } from "@reputable/components/ui/label";
import { Input } from "@reputable/components/ui/input";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@reputable/components/ui/tooltip";
import { useFormState } from "react-dom";
import { setupPortfolio } from "@reputable/actions/setupActions";
import { redirect } from "next/navigation";
import { useToast } from "@reputable/components/ui/use-toast";
import { SetupFormSubmitButton } from "@reputable/components/app/setupFormSubmitButton";

export const SetupForm = () => {
  const { toast } = useToast();

  // --- STATE ---

  const [formState, dispatchSetupPortfolio] = useFormState(
    (formState: unknown, formData: FormData) =>
      setupPortfolio(formState, formData).then((results) => {
        if (results.status === "success") {
          toast({
            title: "You've successfully setup your portfolio!",
            className: "bg-green-300 border-0",
          });

          redirect("/home");
        }

        return results;
      }),
    {
      status: null,
    }
  );

  // --- RENDER ---

  return (
    <form action={dispatchSetupPortfolio}>
      <CardHeader className="space-y-1 text-center ">
        <CardTitle className="text-2xl">Last step!</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">What should we call you?</Label>

          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full"
            name="displayName"
            errorMessage={formState.errors?.displayName?.[0]}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="portfolio" className="items-center flex gap-2 mb-1">
            What should your portfolio URL be?{" "}
            <Tooltip>
              <TooltipTrigger>
                <QuestionMarkCircledIcon />
              </TooltipTrigger>

              <TooltipContent>
                This is your public page url. You can change it anytime.
              </TooltipContent>
            </Tooltip>
          </Label>

          <div className="flex items-center">
            <span className="text-muted-foreground">https://reputable.so/</span>

            <Input
              id="portfolio"
              type="text"
              placeholder="username"
              className="flex-1"
              name="url"
              isInvalid={!!formState.errors?.url?.[0]}
            />
          </div>

          {formState.errors?.url?.[0] && (
            <p className="text-red-500 text-xs mt-1">
              {formState.errors?.url?.[0]}
            </p>
          )}
        </div>

        <SetupFormSubmitButton />
      </CardContent>
    </form>
  );
};
