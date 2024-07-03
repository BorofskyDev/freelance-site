'use client'

import { motion } from 'framer-motion'
import styles from './ExternalLink.module.scss'

export default function ExternalLink({ children, href, ...props }) {
  const icon = {
    hidden: {
      pathLength: 0,
      // fill: 'inherit',
    },
    visible: {
      pathLength: 1,
      // fill: 'hsl(var(--primary-color))',
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={styles.externalLink}
    >
      <a {...props} href={href} target='_blank'>
        {children}
      </a>
      <svg
        width='12'
        height='12'
        viewBox='0 0 12 12'
        // fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          d='M9.11201 1.72043H6.0154V0H12V6.0215H10.2901V2.96774L6.08893 7.19484L4.88004 5.9785L9.11201 1.72043Z'
          variants={icon}
          initial='hidden'
          animate='visible'
        />
        <motion.path
          d='M5.12967 1.67773H0V12.0003H10.2593V6.83903H8.54944V10.2799H1.70989V3.39816H5.12967V1.67773Z'
          variants={icon}
          initial='hidden'
          animate='visible'
        />
      </svg>
    </motion.div>
  )
}
