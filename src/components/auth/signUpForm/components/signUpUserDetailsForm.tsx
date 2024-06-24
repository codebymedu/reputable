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

// TODO: this must be authorized
export const SignUpUserDetailsForm = () => (
  <form action={() => console.log("details")}>
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
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio" className="items-center flex gap-2 mb-1">
          What should your page URL be?{" "}
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
          />
        </div>
      </div>

      <Button className="w-full mt-6">Publish</Button>
    </CardContent>
  </form>
);
