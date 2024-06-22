import { Editor, useEditor as useTipTapEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { extensions } from "@reputable/components/editor/extensions/extensions";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export const useEditor = () => {
  const editor = useTipTapEditor({
    autofocus: true,

    extensions: [StarterKit, ...extensions],
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        class: "min-h-full",
      },
    },
  });

  if (typeof window !== "undefined") {
    window.editor = editor;
  }

  return { editor };
};
