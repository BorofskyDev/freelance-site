import React from 'react'
import styles from './Banner.module.scss'

const Banner = React.forwardRef((props, ref) => {
  return (
    <div className={styles.banner} ref={ref}>
      <span>JBSky Devsign</span>
    </div>
  )
})

export default Banner