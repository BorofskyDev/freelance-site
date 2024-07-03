import { forwardRef } from 'react'
import { pairedData } from '@/libs/functions/pairedData'

import HeroContentTitle from './content-containers/HeroContentTitle'
import HeroCopyright from './content-containers/HeroCopyright'
import styles from './HeroContent.module.scss'

const HeroContent = forwardRef((props, ref, ) => {
  return (
    <div
      ref={ref}
      className={`${styles.heroContent} ${
        props.isSticky ? styles.fixed : ''
      }`}
    >
      {pairedData.map((pair, index) => {
        const isReverseOrder = index % 2 !== 0
        return (
          <div
            className={`${styles.gridItem} ${
              isReverseOrder ? styles.reverseOrder : ''
            }`}
            key={index}
          >
            <HeroContentTitle>{pair.title}</HeroContentTitle>
            <HeroCopyright>{pair.content}</HeroCopyright>
          </div>
        )
      })}
    </div>
  )
})

export default HeroContent
