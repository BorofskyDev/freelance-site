import SmallSectionContainer from '@/components/containers/small-section-container/SmallSectionContainer'
import BodyText from '@/components/typography/body-text/BodyText'

export default function HeroCopyright({ children, className}) {

  return (
    <SmallSectionContainer className={className}>
      <BodyText>{children}</BodyText>
    </SmallSectionContainer>
  )
}
