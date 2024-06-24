import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@reputable/components/ui/dialog";
import { SignUpForm } from "@reputable/components/auth/signUpForm/signUpForm";
import { ReactNode } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type SignUpModalProps = { trigger: ReactNode };

export const SignUpModal = ({ trigger }: SignUpModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>

      <DialogContent isFullScreen className=" p-0">
        <VisuallyHidden>
          <DialogTitle>Create your account</DialogTitle>
        </VisuallyHidden>

        <SignUpForm isModal />
      </DialogContent>
    </Dialog>
  );
};
