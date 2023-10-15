import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = ({ key, item }) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                {item.img &&
                    <Image src={item.img} fill className={styles.image} />}
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt.substring(0, 10)} - {" "}</span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{item.title} </h1>
                </Link>
                <p className={styles.desc}>{item.desc}</p>
                <Link href={`/post/${item.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card