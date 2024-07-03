import styles from './SectionContainer.module.scss'

export default function SectionContainer({ children, id, className }) {
  const containerClasses = `${styles.sectionContainer} ${className || ''}`

  return (
    <section id={id} className={containerClasses}>
      {children}
    </section>
  )
}
