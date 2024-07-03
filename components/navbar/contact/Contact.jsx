'use client'

import styles from './Contact.module.scss'


export default function ContactButton() {
  return (
    <a
      href='#contact'
      aria-label='Contact Button'
      className={styles.contactButton}
      
    >
      Contact
    </a>
  )
}
