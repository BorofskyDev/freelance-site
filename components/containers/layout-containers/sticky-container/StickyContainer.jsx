import styles from './StickyContainer.module.scss'

export default function StickyContainer({ children, className }) {
  const containerClasses = `${styles.stickyContainer} ${className || ''}`

  return <div className={containerClasses}>{children}</div>
}