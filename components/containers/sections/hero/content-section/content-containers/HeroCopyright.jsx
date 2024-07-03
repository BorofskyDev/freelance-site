import SmallSectionContainer from '@/components/containers/small-section-container/SmallSectionContainer'
import BodyText from '@/components/typography/body-text/BodyText'

export default function HeroCopyright({ children }) {
  return (
    <SmallSectionContainer >
      <BodyText>{children}</BodyText>
    </SmallSectionContainer>
  )
}
