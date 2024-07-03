'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './InternalLink.module.scss'

export default function InternalLink({ children, href, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={styles.internalLink}
    >
      <Link {...props} href={href}>
        {children}
      </Link>
    </motion.div>
  )
}
