"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiBold,
  FiItalic,
  FiList,
  FiType,
} from "react-icons/fi";

const PLACEHOLDERS = [
  "[[customer.name]]",
  "[[order.id]]",
  "[[return.reason]]",
  "[[return.date]]",
];

export default function TiptapEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Escribe el contenido del email aquí...",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const border = useColorModeValue("gray.200", "gray.600");
  const bg = useColorModeValue("white", "gray.700");

  const insertPlaceholder = (placeholder: string) => {
    if (!editor) return;
    editor.chain().focus().insertContent(placeholder).run();
  };

  if (!editor) return null;

  return (
    <Box border="1px solid" borderColor={border} borderRadius="md" p={3} bg={bg}>
      {/* Barra de formato */}
      <HStack spacing={2} mb={2}>
        <IconButton
          aria-label="Bold"
          icon={<FiBold />}
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          colorScheme={editor.isActive("bold") ? "blue" : "gray"}
          variant="ghost"
        />
        <IconButton
          aria-label="Italic"
          icon={<FiItalic />}
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          colorScheme={editor.isActive("italic") ? "blue" : "gray"}
          variant="ghost"
        />
        <IconButton
          aria-label="Heading"
          icon={<FiType />}
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          colorScheme={editor.isActive("heading", { level: 2 }) ? "blue" : "gray"}
          variant="ghost"
        />
        <IconButton
          aria-label="Bullet List"
          icon={<FiList />}
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          colorScheme={editor.isActive("bulletList") ? "blue" : "gray"}
          variant="ghost"
        />
        <IconButton
          aria-label="Ordered List"
          icon={<FiList />}
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          colorScheme={editor.isActive("orderedList") ? "blue" : "gray"}
          variant="ghost"
        />
      </HStack>

      {/* Botones para insertar placeholders */}
      <Wrap mb={3}>
        {PLACEHOLDERS.map((ph) => (
          <WrapItem key={ph}>
            <Button
              size="xs"
              variant="outline"
              colorScheme="blue"
              onClick={() => insertPlaceholder(ph)}
            >
              {ph}
            </Button>
          </WrapItem>
        ))}
      </Wrap>

      {/* Área del editor */}
      <EditorContent height={"20%"} editor={editor} />
    </Box>
  );
}
