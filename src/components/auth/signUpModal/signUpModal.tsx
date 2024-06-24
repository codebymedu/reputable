import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@reputable/components/ui/dialog";
import { SignUpForm } from "@reputable/components/auth/signUpForm/signUpForm";
import { ReactNode } from "react";

type SignUpModalProps = { trigger: ReactNode };

export const SignUpModal = ({ trigger }: SignUpModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>

      <DialogContent className="p-0">
        <SignUpForm isModal />
      </DialogContent>
    </Dialog>
  );
};
