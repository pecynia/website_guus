import Link from "next/link"
import { motion } from "framer-motion"
import { generateHTML } from '@tiptap/html'

import EditorComponent from "@/app/[lang]/components/editor/EditorComponent"
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import { Button } from "@/app/[lang]/components/ui/button"
import { Locale } from "../../../../../i18n.config"

interface EditorWrapperProps {
    documentId: string
    content: JSON
    editable: boolean
    currentLocale: Locale
    link?: string
    buttonText?: string
}

const EditorWrapper = ({ documentId, content, editable, link, buttonText, currentLocale }: EditorWrapperProps) => {
    const htmlContent = generateHTML(content, [StarterKit, TextStyle, Color])
    return (
        <motion.div layout className="w-full">
            <EditorComponent currentLocale={currentLocale} documentId={documentId} editable={editable} initialContent={htmlContent} />
            {link && buttonText && (
                <div className="px-4 flex justify-center">
                    <Button className="rounded-none mt-4">
                        <Link href={link}>
                            <p>{buttonText}</p>
                        </Link>
                    </Button>
                </div>
            )}
        </motion.div>
    )
}

export default EditorWrapper

