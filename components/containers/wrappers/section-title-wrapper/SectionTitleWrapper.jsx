import styles from './SectionTitleWrapper.module.scss'

export default function SectionTitleWrapper({ children }) {
    return (
        <div className={styles.sectionTitleWrapper}>
            {children}
        </div>
    )
}