import Feature from "@/components/feature/Feature"
// import HeroCarousel from "@/components/hero/Carousel"
import Hero from "@/components/hero/Hero"
import SalesProduct from "@/components/salesProduct/SalesProduct"
import Blog from "@/components/blog/blog"
import Brands from "@/components/brands/Brands"
import Category from "@/components/category/Category"
import Reviews from "@/components/reviews/Reviews"
import Instagram from "@/components/instagram/InstagramFeed"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <HeroCarousel /> */}
      <Feature />
      <SalesProduct />
      <Blog />
      <Brands />
      <Category />
      <Reviews />
      <Instagram />
    </main>
  )
}
