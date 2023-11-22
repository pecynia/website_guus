import EditorWrapper from "@/app/[lang]/components/editor/EditorWrapper";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const TextComponent = ({ documentId } : { documentId: string }) => {
  return (
    <motion.div
      layout
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge(
        "bg-secondary flex px-10 pt-4 pb-10 max-w-full min-w-[50%]"
      )}
    >
      <EditorWrapper documentId={documentId} />
    </motion.div>
  );
};

export default TextComponent;
