import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import About from "@/components/About"
import Services from "@/components/Services"
import WhyChoose from "@/components/WhyChoose"
import Blog from "@/components/Blog"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  )
}

