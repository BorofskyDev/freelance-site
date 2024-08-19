import { forwardRef } from 'react'
import HeroContentTitle from './content-containers/HeroContentTitle'
import HeroCopyright from './content-containers/HeroCopyright'
import styles from './HeroContent.module.scss'

const HeroContent = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.heroContent} ${props.isSticky ? styles.fixed : ''}`}
    >
      <HeroContentTitle>Design</HeroContentTitle>
      <HeroCopyright>
        Skilled in web design, Figma, and an accessibility-first mentality, I
        design user-centric websites that drive sales and enhance customer
        engagement. My background in sales and customer support allow me to
        address end-user pain points in the design, long before we reach
        implementation.
      </HeroCopyright>
      <HeroContentTitle>Develop</HeroContentTitle>
      <HeroCopyright>
        Whether you need a basic website or an e-commerce webapp for your
        business, I can develop it. Skilled in HTML, JavaScript, CSS, Next
        (React), MongoDB, NodeJS, and other technologies, I have the tools your
        business needs.
      </HeroCopyright>
      <HeroContentTitle>Deploy</HeroContentTitle>
      <HeroCopyright>
        I have a background in in sales, marketing, and customer service. I have
        experience dealing with investors, SEO, and with the finance, sales, and
        marketing of business. I can do more than help develop and deploy your
        next web app, I can help develop and deploy your business strategy.
      </HeroCopyright>
      <HeroContentTitle>Dedicated</HeroContentTitle>
      <HeroCopyright>
        I have a multifaceted career with a skillset that allows me to know a
        little about a lot. JBSky Design isn\'t a risk, it\'s an investment.
      </HeroCopyright>
    </div>
  )
})

export default HeroContent
