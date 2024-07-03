import HeroSection from '@/components/containers/sections/hero/Hero'
import AboutSection from '@/components/containers/sections/about/About'
import Projects from '@/components/containers/sections/projects/Projects'
import BlogSection from '@/components/containers/sections/blog/Blog'
import Contact from '@/components/containers/sections/contact/Contact'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Projects />
      <BlogSection />
      <Contact />
    </>
  )
}
