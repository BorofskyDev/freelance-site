import ContentContainer from '@/components/containers/layout-containers/content-container/ContentContainer'
import { getPosts } from '@/libs/functions/posts'
import BlogCard from '@/components/blog-components/blog-card/BlogCard'

export default async function BlogBottomContainer() {
  const posts = await getPosts()

  return (
    <ContentContainer>
      {posts.map((post) => (
       <BlogCard key={post.slug} post={post} />
      ))}
    </ContentContainer>
  )
}
