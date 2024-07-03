'use client'
import { motion } from 'framer-motion'
import styles from './Heading2.module.scss'

export default function Heading2({ children }) {
  return (
    <div className={styles.heading2}>
      <motion.h2
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -160 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={styles.line}
      ></motion.div>
    </div>
  )
}
