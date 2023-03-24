import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { ReactNode } from 'react';
import { JsxElement } from 'typescript';
const inter = Inter({ subsets: ['latin'] })

interface LinkProps {
    href: string
    title: string
    description: string
    icon: ReactNode
}

export default function Link(props:LinkProps) {
    return (
        <a
            href={props.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >            
            <h2 className={inter.className}>
                <div className={styles.icon}>{props.icon}</div> <span>{props.title}</span> <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                {props.description}
            </p>
        </a>
    )
}