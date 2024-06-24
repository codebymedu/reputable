"use client";

import { EditorContent } from "@tiptap/react";
import { useSidebar } from "@reputable/components/editor/hooks/useSidebar";
import { useEditor } from "@reputable/components/editor/hooks/useEditor";
import { Sidebar } from "@reputable/components/editor/components/sidebar/sidebar";
import { Header } from "@reputable/components/editor/components/header/header";
import { EmptyStatePlaceholder } from "@reputable/components/editor/components/emptyStatePlaceholder/emptyStatePlaceholder";

import ImageBlockMenu from "@reputable/tiptap/extensions/ImageBlock/components/ImageBlockMenu";
import { ColumnsMenu } from "@reputable/tiptap/extensions/MultiColumn/menus";
import {
  TableColumnMenu,
  TableRowMenu,
} from "@reputable/tiptap/extensions/Table/menus";
import { TextMenu } from "@reputable/tiptap/components/menus/TextMenu";
import { ContentItemMenu } from "@reputable/tiptap/components/menus/ContentItemMenu";
import { LinkMenu } from "@reputable/tiptap/components/menus";

import "@reputable/tiptap/styles/index.css";
import { useRef } from "react";

export const Editor = () => {
  const menuContainerRef = useRef(null);

  const { editor } = useEditor();

  const sidebar = useSidebar();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex h-full w-full relative" ref={menuContainerRef}>
      <div className="relative flex flex-col flex-1  overflow-hidden h-screen ">
        <EmptyStatePlaceholder editor={editor} />
        <Header isSidebarOpen={sidebar.isOpen} toggleSidebar={sidebar.toggle} />

        <EditorContent editor={editor} className="flex-1 overflow-y-auto " />
        <ContentItemMenu editor={editor} />
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>

      <Sidebar isOpen={sidebar.isOpen} handleClose={sidebar.close} />
    </div>
  );
};
