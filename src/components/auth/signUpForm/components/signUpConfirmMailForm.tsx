import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@reputable/components/ui/card";
import { Label } from "@reputable/components/ui/label";
import { Button } from "@reputable/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@reputable/components/ui/input-otp";

type SignUpConfirmMailFormProps = { handleNextStep: () => void };

export const SignUpConfirmMailForm = ({
  handleNextStep,
}: SignUpConfirmMailFormProps) => {
  // TODO: this must be authorized

  return (
    <form action={() => handleNextStep()}>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Confirm your email</CardTitle>

        <CardDescription>
          We&apos;ve sent a confirmation code to your email address. Enter the
          code below to verify your account.
        </CardDescription>
      </CardHeader>

      <CardContent className="">
        <div className="">
          <Label htmlFor="code">Confirmation Code</Label>

          <InputOTP maxLength={6} pattern="^[0-9]+$" className="mt-2">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button type="submit" className="w-full mt-6">
          Confirm
        </Button>
      </CardContent>
    </form>
  );
};
