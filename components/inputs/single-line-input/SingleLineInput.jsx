import styles from './SingleLineInput.module.scss'

export default function SingleLineInput({ label, name, placeholder, type }) {
  return (
    <div className={styles.singleLineInput}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  )
}
