'use client'
import { useStickyNav } from '@/libs/hooks/useStickyNav'
import Navbar from '../navbar/Navbar'
import Banner from './banner/Banner'

export default function Header() {
  const { isSticky, navbarRef, bannerRef } = useStickyNav()

  return (
    <>
      <Banner ref={bannerRef} />
      <Navbar isSticky={isSticky} ref={navbarRef} />
    </>
  )
}
