'use client'
import React from 'react'
import ContactButton from './contact/Contact'
import NavToggle from './nav-toggle/NavToggle'
import ThemeToggle from './theme-toggle/ThemeToggle'
import styles from './Navbar.module.scss'
import NavMenu from './nav-toggle/menu/NavMenu'

const Navbar = React.forwardRef(({ isSticky }, navbarRef) => {
  return (
    <div
      className={`${styles.navbar} ${isSticky ? styles.stickyNav : ''}`}
      ref={navbarRef}
    >
      <NavToggle />
      <div className={styles.navbarButtons}>
       
      <ThemeToggle />
      <ContactButton />

      </div>
    </div>
  )
})

export default Navbar
