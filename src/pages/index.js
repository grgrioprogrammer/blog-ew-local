import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header/Header'
import { OurBlog } from '@/components/OurBlog/OurBlog'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&display=swap" rel="stylesheet"/>
      </Head>
        <Header />
        <OurBlog />
    </>
  )
}
