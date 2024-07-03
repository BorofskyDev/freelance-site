import styles from './TitleContainer.module.scss'

export default function TitleContainer({ children, className }) {
  const containerClasses = `${styles.titleContainer} ${className || ''}`

  return <div className={containerClasses}>{children}</div>
}
