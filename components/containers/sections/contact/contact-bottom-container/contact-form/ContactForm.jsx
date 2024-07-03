import SingleLineInput from '@/components/inputs/single-line-input/SingleLineInput'
import styles from './ContactForm.module.scss'
import MessageInput from '@/components/inputs/message-input/MessageInput'
import SendBtn from '@/components/buttons/send-btn/SendBtn'

export default function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <SingleLineInput
        label='Name'
        name='name'
        placeholder='Your Name'
        type='text'
      />
      <SingleLineInput
        label='Email'
        name='email'
        placeholder='Your Email'
        type='email'
      />
      <MessageInput label='Message' name='message' placeholder='Your message' />
      <SendBtn type='send' buttonText='Send!' />
    </form>
  )
}
