import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import HeroTopContainer from './hero-top-container/HeroTopContainer'
import HeroBottomContainer from './hero-bottom-container/HeroBottomContainer'

export default function HeroSection() {
  return (
    <SectionContainer id={'home'}>
      <HeroTopContainer />
      <HeroBottomContainer />
    </SectionContainer>
  )
}
