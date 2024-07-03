import styles from './MessageInput.module.scss'

export default function MessageInput({ label, name, placeholder }) {
  return (
    <div className={styles.messageInput}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} placeholder={placeholder}></textarea>
    </div>
  )
}
