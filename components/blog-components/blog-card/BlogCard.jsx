'use client'
import { motion } from 'framer-motion'
import Heading3 from '@/components/typography/heading3/Heading3'
import BodyText from '@/components/typography/body-text/BodyText'
import InternalLink from '@/components/links/internal-link/InternalLink'
import Image from 'next/image'
import SmallText from '@/components/typography/small-text/SmallText'

import styles from './BlogCard.module.scss'

export default function BlogCard({ post }) {
  return (
    <div key={post.slug} className={styles.blogCard}>
      <Heading3 className={styles.title}>{post.title}</Heading3>
      <div className={styles.contentContainer}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Image
            className={styles.image}
            src={post.image}
            alt={post.title}
            width={1600}
            height={1200}
          />{' '}
        </motion.div>

        <motion.div
          className={styles.contentBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className={styles.categories}>
            <SmallText>{post.date}</SmallText>
          </div>

          <BodyText>{post.summary}</BodyText>
          <InternalLink href={`/blog/${post.slug}`}>
            Read {post.title}
          </InternalLink>
        </motion.div>
      </div>
    </div>
  )
}
