'use client'
import { motion } from 'framer-motion'
import styles from './Heading1.module.scss'

export default function Heading1({ children }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={styles.heading1}
    >
      {children}
    </motion.h1>
  )
}
