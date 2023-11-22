"use client"

import React from 'react'
import EditorWrapper from '@/app/[lang]/components/editor/EditorWrapper'
import { motion } from "framer-motion"
import TextComponent from '@/app/[lang]/components/editor/TextComponent'


function TestComponent() {
  return (
    <motion.div layout
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ type: "spring", ease: "easeInOut", duration: 0.5 }}
        className='relative'
    >   
        <div className='w-full h-full flex justify-center items-center'>
            <TextComponent documentId='initial-test' />
        </div>
    </motion.div>
  )
}

export default TestComponent