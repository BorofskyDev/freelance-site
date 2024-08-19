import styles from './SmallSectionContainer.module.scss'

export default function SmallSectionContainer({ children, className }) {
  const smallContainerClasses = `${styles.smallSectionContainer} ${
    className || ''
  }`
  console.log('Container Classes:', smallContainerClasses) // Debugging
  return <div className={smallContainerClasses}>{children}</div>
}
