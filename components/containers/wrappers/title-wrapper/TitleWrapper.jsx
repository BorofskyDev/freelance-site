import styles from './TitleWrapper.module.scss'

export default function TitleWrapper({ children, className }) {
  const containerClasses = `${styles.titleWrapper} ${className || ''}`

  return <div className={containerClasses}>{children}</div>
}
