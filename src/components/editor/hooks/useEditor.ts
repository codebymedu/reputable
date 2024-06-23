import { Editor, useEditor as useTipTapEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { ExtensionKit } from "@reputable/tiptap/extensions/extension-kit";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export const useEditor = () => {
  const editor = useTipTapEditor({
    autofocus: true,

    extensions: [...ExtensionKit()],
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
