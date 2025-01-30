import Feature from "@/components/feature/Feature"
import Hero from "@/components/hero/Hero"
import SalesProduct from "@/components/salesProduct/SalesProduct"
import Blog from "@/components/blog/blog"
import Brands from "@/components/brands/Brands"
import Category from "@/components/category/Category"
import Reviews from "@/components/reviews/Reviews"
import Instagram from "@/components/instagram/InstagramFeed"
import Newsletter from "@/components/newsletter/Newsletter"
import ScrollBtn from "@/components/windowScroll/ScrollBtn"
import Counter from "@/components/Counter"


export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Counter /> */}
      <Feature />
      <SalesProduct />
      <Blog />
      <Brands />
      <Category />
      <Reviews />
      <Instagram />
      <Newsletter />
      <ScrollBtn />
    </main>
  )
}
