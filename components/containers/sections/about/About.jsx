import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import AboutBottomContainer from './about-bottom-container/AboutBottomContainer'
import AboutTopContainer from './about-top-container/AboutTopContainer'

export default function AboutSection() {
  return (
    <SectionContainer id={'about'}>
      <AboutTopContainer />
      <AboutBottomContainer />
    </SectionContainer>
  )
}
