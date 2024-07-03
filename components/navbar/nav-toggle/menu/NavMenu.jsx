import NavLink from './NavLink'
import styles from './NavMenu.module.scss'

export default function NavMenu({ isMenuOpen }) {
  return (
    <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
      <ul>
        <NavLink name='Home' href='#home' />
        <NavLink name='About' href='#about' />
        <NavLink name='Projects' href='#projects' />
        <NavLink name='Blog' href='#blog' />
      </ul>
    </nav>
  )
}


