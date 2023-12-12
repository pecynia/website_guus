"use client"

import React from 'react'
import { useSession } from 'next-auth/react'

import { motion } from "framer-motion"
import TextComponent from '@/app/[lang]/components/editor/TextComponent'
import { Locale } from '../../../../i18n.config'


type TestComponentProps = {
  params: {
    content: JSON
  }
}
// Move this to the home page and make this a client side
export async function generateStaticParams({ params }: TestComponentProps) {
  return {
    props: {
      params,
    },
  }
}

function TestComponent({ currentLocale, params }: { currentLocale: Locale, params: TestComponentProps }) {
  const { status, data: session } = useSession()

  return (
    <motion.div layout
        initial={{ opacity: 0, x: '-10%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ type: "spring", ease: "easeInOut", duration: 0.3 }}
        className='relative'
    >   
        <div className='w-full h-full flex justify-center items-center'>
            <TextComponent documentId='initial-test' currentLocale={currentLocale} editable={!!session}/>
        </div>
    </motion.div>
  )
}

export default TestComponent