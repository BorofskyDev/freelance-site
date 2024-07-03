import styles from './NavLink.module.scss'

export default function NavLink({ name, href }) {
  return (
    <li className={styles.navLink}>
      <a href={href}>{name}</a>
    </li>
  )
}
