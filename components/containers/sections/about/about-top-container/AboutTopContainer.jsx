import StickyContainer from "@/components/containers/layout-containers/sticky-container/StickyContainer";
import TitleContainer from "@/components/containers/layout-containers/title-container/TitleContainer";
import SectionHeadingWrapper from "@/components/containers/wrappers/section-heading-wrapper/SectionHeadingWrapper";
import SectionTitleWrapper from "@/components/containers/wrappers/section-title-wrapper/SectionTitleWrapper";
import InternalLink from "@/components/links/internal-link/InternalLink";
import SectionTitle from "@/components/typography/section-title/SectionTitle";

export default function AboutTopContainer() {
    return (
      <TitleContainer>
        <StickyContainer>
          <SectionHeadingWrapper>
            <SectionTitleWrapper>
              <SectionTitle>About</SectionTitle>
            </SectionTitleWrapper>
            <InternalLink href={'#projects'}>Skip to Projects</InternalLink>
          </SectionHeadingWrapper>
        </StickyContainer>
      </TitleContainer>
    )
}