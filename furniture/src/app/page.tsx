import Category from "@/components/category/Category"
// import HeroCarousel from "@/components/hero/Carousel"
import Hero from "@/components/hero/Hero"
import SalesProduct from "@/components/salesProduct/SalesProduct"
import Blog from "@/components/blog/blog"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <HeroCarousel /> */}
      <Category />
      <SalesProduct />
      <Blog />
    </main>
  )
}
