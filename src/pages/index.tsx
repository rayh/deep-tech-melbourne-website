import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react';
import Link from '@/components/Link';
import { RxDiscordLogo, RxCalendar, RxSpeakerLoud, RxVideo, RxPaperPlane } from "react-icons/rx";
import { ParticleEffect } from '@/components/ParticleEffect';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Deep Tech Melbourne</title>
        <meta name="description" content="Deep Tech Melbourne is a meetup for science-led innovation.  Calling on entreprenuers, founders, technologists, scientists and enthusiasts alike" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dtm-logo.png" />
      </Head>
      <main className={styles.main}>
        <ParticleEffect />

        <div className={styles.center}>
          <div className={styles.mainHeadline}>
            <h1 className={inter.className}>
              Deep Tech Melbourne
            </h1>

            <div className={styles.description}>
              Bringing the science-led entreprenurial community together in Naarm / Melbourne
            </div>
          </div>          
        </div>

        <div className={styles.grid}>
          <Link href="https://lu.ma/dtm" icon={<RxCalendar />} title="Events" description="Register to find out about our upcoming events on Lu.ma"/>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfYHHALyyONYQQtGwPT3xNQhNAjcwHR7qTT1JgZidi-CCFplw/viewform" icon={<RxSpeakerLoud />} title="Speak" description="Let us know if you're keen to present at a future event"/>
          <Link href="https://discord.gg/CuKyvV8ER3" icon={<RxDiscordLogo />} title="Discord" description="Keep the conversation going by joining our Discord"/>
          <Link href="https://www.youtube.com/channel/UCmuFEYdQzZ0MHWJfmnJG2jQ" icon={<RxVideo />} title="Youtube" description="Watch previous talks, panels and conversations"/>
          {/* <Link href="mailto:hello@dtm.wtf" icon={<RxPaperPlane />} title="Contact" description="Got a question? reach out to the organisers"/> */}
        </div>

        {/* <div className={styles.description}>
            <Image src='/dtm-logo.png' alt="Deep Tech Melbourne Logo" width={24} height={24} priority /> &copy; 2023 Deep Tech Melbourne
        </div> */}
      </main>
    </>
  )
}
