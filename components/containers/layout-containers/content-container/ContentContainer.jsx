import styles from './ContentContainer.module.scss'

export default function ContentContainer({ children, className }) {
    const containerClasses = `${styles.contentContainer} ${className || ''}`
    
    return <div className={containerClasses}>{children}</div>
    }