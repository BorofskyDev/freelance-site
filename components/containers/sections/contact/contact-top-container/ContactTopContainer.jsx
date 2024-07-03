import StickyContainer from "@/components/containers/layout-containers/sticky-container/StickyContainer";
import TitleContainer from "@/components/containers/layout-containers/title-container/TitleContainer";
import SectionHeadingWrapper from "@/components/containers/wrappers/section-heading-wrapper/SectionHeadingWrapper";
import SectionTitleWrapper from "@/components/containers/wrappers/section-title-wrapper/SectionTitleWrapper";
import ExternalLink from "@/components/links/external-link/ExternalLink";
import InternalLink from "@/components/links/internal-link/InternalLink";
import SectionTitle from "@/components/typography/section-title/SectionTitle";

export default function ContactTopContainer() {
  return (
    <TitleContainer>
      <StickyContainer>
        <SectionHeadingWrapper>
          <SectionTitleWrapper>
            <SectionTitle>Contact</SectionTitle>
          </SectionTitleWrapper>
          <ExternalLink href='#'>
            My GitHub
          </ExternalLink>
          <ExternalLink href='#'>
            My LinkedIn
          </ExternalLink>
          <ExternalLink href='#'>
            My Codepen
          </ExternalLink>
        </SectionHeadingWrapper>
      </StickyContainer>
    </TitleContainer>
  )
}
