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
import { Button } from "@reputable/components/ui/button";
import { useFormState } from "react-dom";
import { setupPortfolio } from "@reputable/actions/setupActions";

export const SetupForm = () => {
  // --- STATE ---

  const [formState, dispatchSetupPortfolio] = useFormState(setupPortfolio, {
    status: null,
  });

  // --- RENDER ---

  return (
    <form action={dispatchSetupPortfolio}>
      <CardHeader className="space-y-1 text-center">
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

        <Button type="submit" className="w-full mt-6">
          Publish
        </Button>
      </CardContent>
    </form>
  );
};
