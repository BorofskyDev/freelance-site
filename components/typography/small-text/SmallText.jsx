import styles from './SmallText.module.scss'

export default function SmallText({ children, className }) {
  return (
    <p className={`${styles.smallText} ${className}`}>{children}</p>
  )
}