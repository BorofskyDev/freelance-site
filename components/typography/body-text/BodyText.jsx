'use client'
import { motion } from 'framer-motion'
import styles from './BodyText.module.scss'

export default function BodyText({ children, className }) {
  const bodyClasses = `${styles.bodyText} ${className || ''}`

  return (
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={bodyClasses}
    >
      {children}
    </motion.p>
  )
}

// add framer motion to this
