import styles from './SmallSectionContainer.module.scss'

export default function SmallSectionContainer({children, className}) {
  const smallContainerClasses = `${styles.smallSectionContainer} ${className || ''}`
  return <div className={smallContainerClasses} >{children}</div>
}
