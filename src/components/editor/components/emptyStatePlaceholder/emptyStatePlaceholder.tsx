import { Button } from "@reputable/components/ui/button";
import { Editor } from "@tiptap/react";
import { RocketIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import Link from "next/link";

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
    <div className="absolute top-16 w-screen h-[400px] bg-white z-50 left-0 flex flex-col justify-center items-center  ">
      <p>
        Show them you are{" "}
        <code className="bg-primary text-white px-1 font-semibold">
          Reputable!
        </code>
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

      <div className="flex mt-12 flex-col gap-3 items-center">
        <h3 className="text-md font-bold flex items-center gap-2">
          <RocketIcon height={16} width={16} className="text-neutral-600" />{" "}
          What&apos;s next?
        </h3>
        <p>
          Reputable serves its community.{" "}
          <Link
            target="_blank"
            href="https://prairie-teeth-3bf.notion.site/Roadmap-b61d0bb8bfe146ea8b6c321d0a334f3e"
            className="underline"
          >
            Click here
          </Link>{" "}
          to see what&apos;s next!
        </p>
      </div>
    </div>
  );
};
