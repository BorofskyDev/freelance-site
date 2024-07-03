import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import BlogBottomContainer from './blog-bottom-container/BlogBottomContainer'
import BlogTopContainer from './blog-top-container/BlogTopContainer'

export default function BlogSection() {
  return (
    <SectionContainer id={'blog'}>
      <BlogTopContainer />
      <BlogBottomContainer />
    </SectionContainer>
  )
}
