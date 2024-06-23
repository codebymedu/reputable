import { Button } from "@reputable/components/ui/button";
import { Editor } from "@tiptap/react";
import { useEffect } from "react";

type EmptyStatePlaceholderProps = { editor: Editor };

export const EmptyStatePlaceholder = ({
  editor,
}: EmptyStatePlaceholderProps) => {
  // --- EFFECTS ---

  useEffect(() => {
    editor.commands.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- RENDER ---

  if (!editor.isEmpty) {
    return null;
  }

  return (
    <div className="absolute top-16 w-full h-96 bg-white left-0 flex flex-col justify-center items-center  ">
      <p>
        Build a{" "}
        <code className="bg-primary text-white px-1 font-semibold">
          Reputable
        </code>{" "}
        portfolio!
      </p>

      <p>
        Type <code className="bg-primary text-white px-1">/</code> to insert
        blocks or start with a template.
      </p>

      <div className="flex gap-4 items-center mt-8">
        <Button
          variant="outline"
          onClick={() => {
            editor.commands.enter();
            editor.commands.focus();
          }}
        >
          Press Enter to start from scratch
        </Button>
        or
        <Button variant="outline" onClick={() => alert(1)}>
          Use a template
        </Button>
      </div>
    </div>
  );
};
