import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@reputable/components/ui/card";
import { Label } from "@reputable/components/ui/label";
import { Input } from "@reputable/components/ui/input";
import { Button } from "@reputable/components/ui/button";

export const SignUpCredentialsForm = () => {
  return (
    <form action={() => console.log("ran")}>
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="email">Password</Label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>
        </div>

        <Button className="w-full mt-6">Create Account</Button>
      </CardContent>
    </form>
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
