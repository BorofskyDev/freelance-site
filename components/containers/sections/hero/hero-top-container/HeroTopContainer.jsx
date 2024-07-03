import StickyContainer from "@/components/containers/layout-containers/sticky-container/StickyContainer";
import TitleContainer from "@/components/containers/layout-containers/title-container/TitleContainer";
import HeroTitle from "./hero-title/HeroTitle";
import HeroImageContainer from "./hero-image-container/HeroImageContainer";
import HeroDesc from "./hero-description/HeroDesc";

export default function HeroTopContainer() {
    return (
      <TitleContainer>
        <StickyContainer>
          <HeroTitle />
          <HeroImageContainer />
          <HeroDesc />
        </StickyContainer>
      </TitleContainer>
    )
}