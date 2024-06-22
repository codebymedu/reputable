"use client";

import { EditorContent } from "@tiptap/react";
import { useSidebar } from "@reputable/components/editor/hooks/useSidebar";
import { useEditor } from "@reputable/components/editor/hooks/useEditor";
import { Sidebar } from "@reputable/components/editor/components/sidebar/sidebar";
import { Header } from "@reputable/components/editor/components/header/header";

export const Editor = () => {
  const { editor } = useEditor();

  const sidebar = useSidebar();

  return (
    <div className="flex h-full w-full relative">
      <div className="relative flex flex-col flex-1 h-screen overflow-hidden ">
        <Header isSidebarOpen={sidebar.isOpen} toggleSidebar={sidebar.toggle} />

        <EditorContent editor={editor} className="flex-1 overflow-y-auto " />
      </div>

      <Sidebar isOpen={sidebar.isOpen} />
    </div>
  );
};
