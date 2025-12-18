"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Shield, Heart, Sparkles, CheckCircle2 } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { siteConfig } from "@/config/site.config"

const iconMap: Record<string, typeof Award> = {
  Award,
  Clock,
  Shield,
  Heart,
  Sparkles,
  CheckCircle2,
}

const reasons = siteConfig.whyChoose.items

export default function WhyChoose() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const onSelect = () => {
    if (!emblaApi) return
    const selected = emblaApi.selectedScrollSnap()
    // Calcula o índice real considerando o loop infinito
    // Garante que o índice seja sempre entre 0 e reasons.length - 1
    const realIndex = ((selected % reasons.length) + reasons.length) % reasons.length
    setSelectedIndex(realIndex)
  }

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("settle", onSelect)

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }

    const interval = setInterval(autoplay, 4000)

    return () => {
      clearInterval(interval)
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
      emblaApi.off("settle", onSelect)
    }
  }, [emblaApi])

  return (
    <section ref={ref} className="py-20 bg-white relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a4d4d]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2d7a7a]/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#1a4d4d]/10 text-[#1a4d4d] font-semibold mb-6 text-sm tracking-wider uppercase border border-[#1a4d4d]/20">
            {siteConfig.whyChoose.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {siteConfig.whyChoose.title.line1}{" "}
            <span className="text-[#1a4d4d]">{siteConfig.whyChoose.title.highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.whyChoose.description}
          </p>
        </motion.div>

        <div className="overflow-hidden py-4" ref={emblaRef}>
          <div className="flex gap-8 px-4">
            {[...reasons, ...reasons, ...reasons].map((reason, index) => {
              const Icon = iconMap[reason.icon]
              return (
                <motion.div
                  key={`${reason.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index % reasons.length) * 0.1 }}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <Card className="h-full bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group hover:border-[#1a4d4d]/40 rounded-2xl">
                    <CardContent className="p-10 text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a4d4d] to-[#2d7a7a] mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 ring-4 ring-[#1a4d4d]/10">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1a4d4d] transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {reasons.map((_, index) => {
            const isActive = index === selectedIndex
            return (
              <button
                key={index}
                onClick={() => {
                  if (emblaApi) {
                    // Encontra a primeira ocorrência do slide no array duplicado
                    const targetIndex = index
                    emblaApi.scrollTo(targetIndex)
                  }
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#1a4d4d] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : "false"}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
