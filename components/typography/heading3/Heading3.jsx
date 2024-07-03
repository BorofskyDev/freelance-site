'use client'
import { motion } from 'framer-motion'
import styles from './Heading3.module.scss'

export default function Heading3({ children, className }) {
  const heading3Classes = `${styles.heading3} ${className || ''}`

  return (
    <motion.h3
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={heading3Classes}
    >
      {children}
    </motion.h3>
  )
}
