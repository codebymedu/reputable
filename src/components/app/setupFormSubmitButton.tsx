import { Button } from "@reputable/components/ui/button";
import { useFormStatus } from "react-dom";

export const SetupFormSubmitButton = () => {
  // --- STATE ---

  const { pending } = useFormStatus();

  // --- RENDER ---

  return (
    <Button type="submit" className="w-full mt-6" disabled={pending}>
      Publish
    </Button>
  );
};
