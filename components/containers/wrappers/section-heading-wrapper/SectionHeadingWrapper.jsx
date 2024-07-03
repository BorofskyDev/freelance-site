import styles from './SectionHeadingWrapper.module.scss'

export default function SectionHeadingWrapper({ children }) {
    return (
        <div className={styles.sectionHeadingWrapper}>
            {children}
        </div>
    )
}