import styles from './MediumContainer.module.scss'

export default function MediumContainer({children}){
    return (
        <div className={styles.mediumContainer}>
            {children}
        </div>
    )
}