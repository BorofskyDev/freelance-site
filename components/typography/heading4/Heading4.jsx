'use client'
import { motion } from 'framer-motion'
import styles from './Heading4.module.scss'

export default function Heading4({children}) {
    return (
      <motion.h4
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={styles.heading4}
      >
        {children}
      </motion.h4>
    )
}