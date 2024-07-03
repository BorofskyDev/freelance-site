import Image from 'next/image'
import joelBorofsky from '@/public/images/profile/joelBorofsky.png'
import styles from './HeroImageContainer.module.scss'

export default function HeroImageContainer(){
    return (
      <div className={styles.imageContainer}>
        <Image
          src={joelBorofsky}
          alt='Joel Borofsky'
          height={430}
          width={330}
          className={styles.image}
        />
      </div>
    )
}