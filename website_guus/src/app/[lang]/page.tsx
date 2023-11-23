import Link from 'next/link'
import { Metadata, ResolvingMetadata  } from 'next'
import { motion } from 'framer-motion'

import Image from 'next/image'



import { Locale } from '@/app/../../i18n.config'
import { getDictionary } from '@/lib/dictionary'
import TestComponent from './components/TestComponent'
import TextPopup from './components/TextPopup'

export async function generateMetadata(
  { params }: { params: { lang: Locale } },
  parent: ResolvingMetadata 
  ): Promise<Metadata> {
  return {
    title: 'Website Title',
    description: 'Website Description',
    openGraph: {
      type: 'website',
      title: 'Website Title',
      description: 'Website Description',
      url: 'https://example.com',
      images: [],
      siteName: 'Website Name',
      locale: params.lang,
      ttl: 30,
    }
  }
}

export default async function Home({
    params: { lang }
  }: {
    params: { lang: Locale }
  }) {  
    const { page } = await getDictionary(lang)
    
    return (
      <div className='py-16 flex flex-col justify-center items-center'>
        {/* <Image 
          src='/logo.png'
          alt="Image" 
          fill
          className="object-cover object-center"
        /> */}
        <TestComponent currentLocale={lang} />
        {/* <TextPopup currentLocale={lang} documentId='initial-test' imgPath='/../../../public/imgs/vlam.png' /> */}

      </div>
  )
}
