"use client"

import EditorWrapper from "@/app/[lang]/components/editor/EditorWrapper";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Locale } from "../../../../../i18n.config";

const TextComponent = ({ documentId, currentLocale, content, editable } : { documentId: string, currentLocale: Locale, content: JSON, editable: boolean }) => {
  return (
    <motion.div
      layout
      transition={{ duration: 0.7, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge(
        "bg-secondary flex px-4 pt-4 pb-10 max-w-[70%]"
      )}
    >
      <EditorWrapper documentId={documentId} currentLocale={currentLocale} editable={editable} content={content}/>
    </motion.div>
  );
};

export default TextComponent;
