import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@reputable/components/ui/card";
import { Label } from "@reputable/components/ui/label";
import { Input } from "@reputable/components/ui/input";
import { Button } from "@reputable/components/ui/button";
import Link from "next/link";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@reputable/components/ui/tooltip";
import { cn } from "@reputable/lib/utils";

type SignUpFormProps = { isModal?: boolean };

export const SignUpForm = ({ isModal }: SignUpFormProps) => {
  // --- RENDER ---

  return (
    <div className="flex items-center justify-center">
      <Card
        className={cn("w-full max-w-md", isModal && "border-0 shadow-none")}
      >
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Create your account</CardTitle>

          <CardDescription>
            Show the world your personal page in minutes.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button variant="outline" className="w-full gap-2 flex">
            <GoogleIcon className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>

          <p className="text-center w-full my-4">or</p>

          <div className="space-y-5">
            <div>
              <Label htmlFor="email">What&apos;s your Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="name">What should we call you?</Label>

              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full"
              />
            </div>

            <div>
              <Label
                htmlFor="portfolio"
                className="items-center flex gap-2 mb-1"
              >
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
                <span className="text-muted-foreground">
                  https://reputable.so/
                </span>
                <Input
                  id="portfolio"
                  type="text"
                  placeholder="username"
                  className="flex-1"
                />
              </div>
            </div>

            <Button className="w-full mt-6">Create Account</Button>
          </div>
        </CardContent>

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

function GoogleIcon(props: any) {
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
