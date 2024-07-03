import style from './SendBtn.module.scss'

export default function SendBtn({ buttonText, type }) {
  return (
    <div className={style.sendBtn}>
      <button type={type}>{buttonText}</button>
    </div>
  )
}
