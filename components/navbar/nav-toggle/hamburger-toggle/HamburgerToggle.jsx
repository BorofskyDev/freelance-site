import styles from './HamburgerToggle.module.scss'

export default function HamburgerToggle({ isMenuOpen, handleMenuToggle }) {
  const hamburgerStyles = isMenuOpen
    ? `${styles.hamburgerToggle} ${styles.opened}`
    : styles.hamburgerToggle

  return (
    <button
      className={hamburgerStyles}
      onClick={handleMenuToggle}
      aria-label='Navigation Menu Toggle'
      tabIndex={1}
    >
      
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
