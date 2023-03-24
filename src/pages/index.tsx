import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react';
import Link from '@/components/Link';
import { RxDiscordLogo, RxCalendar } from "react-icons/rx";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Deep Tech Melbourne</title>
        <meta name="description" content="Deep Tech Melbourne is a meetup for science-led innovation.  Calling on entreprenuers, founders, technologists, scientists and enthusiasts alike" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {/* Get started by editing&nbsp; */}
            {/* <code className={styles.code}>src/pages/index.tsx</code> */}
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image src='/dtm-logo.png' alt="Deep Tech Melbourne Logo" width={78} height={78} priority />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.mainHeadline}>
            <h1 className={inter.className}>
              Deep Tech Melbourne
            </h1>
          </div>
        </div>

        <div className={styles.grid}>
          <Link href="https://lu.ma/dtm" icon={<RxCalendar />} title="Events" description="Register to find out about our upcoming events on Lu.ma"/>
          <Link href="https://discord.gg/CuKyvV8ER3" icon={<RxDiscordLogo />} title="Discord" description="Keep the conversation going by joining our Discord"/>
        </div>
      </main>
    </>
  )
}
