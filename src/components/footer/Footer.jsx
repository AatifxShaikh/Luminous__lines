import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src='/logo.png' width={50} height={50} />
                    <h1 className={styles.logoText}>Luminous Lines</h1>
                </div>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis, tempore voluptates nisi earum nam saepe. Cupiditate nobis doloremque eos itaque magni temporibus quo similique amet, iusto ipsa, odit distinctio.</p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" width={18} height={18} />
                    <Image src="/instagram.png" width={18} height={18} />
                    <Image src="/tiktok.png" width={18} height={18} />
                    <Image src="/youtube.png" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Blog</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href='/'>Styles</Link>
                    <Link href='/'>Fashion</Link>
                    <Link href='/'>Coding</Link>
                    <Link href='/'>Tarvel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href='/'>Facebook</Link>
                    <Link href='/'>Instagram</Link>
                    <Link href='/'>Tiktok</Link>
                    <Link href='/'>Youtube</Link>
                </div>
            </div>
        </div>
    )
}
