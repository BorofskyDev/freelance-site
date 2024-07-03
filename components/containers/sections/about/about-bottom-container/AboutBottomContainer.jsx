import ContentContainer from '@/components/containers/layout-containers/content-container/ContentContainer'
import MediumContainer from '@/components/containers/layout-containers/medium-container/MediumContainer'
import BodyText from '@/components/typography/body-text/BodyText'
import Heading3 from '@/components/typography/heading3/Heading3'
import Stack from './stack/Stack'

export default function AboutBottomContainer() {
  return (
    <ContentContainer>
      <MediumContainer>
        <Heading3>Creative Fullstack Developer</Heading3>
        <BodyText>
          In 2019, I helped found a SaaS company and needed to get the idea of
          the software turned into the reality of the software. While the COVID
          crisis brought an end to the company, it didn’t end my fascination in
          web app development. It was a few years before I took the first steps
          into coding by learning the basics (HTML, CSS, and JavaScript), but
          once I did I was hooked.
        </BodyText>
        <BodyText>
          Since that time I’ve put a focus on UI/UX with an accessibility-first
          mentality coupled with building out the APIs and backend needed for a
          functioning web app. I like building things and blurring the line
          between frontend and backend.{' '}
        </BodyText>
      </MediumContainer>
      <MediumContainer>
        <Heading3>The Stack</Heading3>
        <Stack />
      </MediumContainer>
      <MediumContainer>
        <Heading3>More About Me</Heading3>
        <BodyText>
          In my downtime, I enjoy outdoor activities, working out, experimenting
          with new recipes, and exploring hidden eateries in my city. When time
          and finances allow, I relish the opportunity to travel globally and
          immerse myself in new cultures and perspectives. I firmly believe that
          true creativity is found in diversity. I'm passionate about history
          and culture, and center my life around the philosophy that we all
          benefit from learning from one another.
        </BodyText>
        <BodyText>
          On a more personal note, I have a love for animals, and enjoy spending
          my leisure time reading about history, playing Cities: Skylines,
          engaging with anything Star Wars-related, or exploring new places.
        </BodyText>
      </MediumContainer>
    </ContentContainer>
  )
}
