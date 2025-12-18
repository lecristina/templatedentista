"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Smile, AlignCenter, Zap, Heart, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { siteConfig } from "@/config/site.config"

const iconMap: Record<string, typeof Stethoscope> = {
  Stethoscope,
  Sparkles,
  AlignCenter,
  Zap,
  Heart,
  Smile,
}

const services = siteConfig.services.items

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    skipSnaps: false,
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const onSelect = () => {
    if (!emblaApi) return
    const selected = emblaApi.selectedScrollSnap()
    setSelectedIndex(selected)
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi])

  return (
    <section id="servicos" ref={ref} className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1a4d4d]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2d7a7a]/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#1a4d4d]/10 text-[#1a4d4d] font-semibold mb-6 text-sm tracking-wider uppercase border border-[#1a4d4d]/20">
            {siteConfig.services.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {siteConfig.services.title.line1}{" "}
            <span className="text-[#1a4d4d]">{siteConfig.services.title.highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.services.description}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:flex justify-end gap-3 mb-8">
            <Button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              variant="outline"
              size="icon"
              className="rounded-full w-14 h-14 border-2 border-gray-300 hover:bg-[#1a4d4d] hover:text-white hover:border-[#1a4d4d] disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              variant="outline"
              size="icon"
              className="rounded-full w-14 h-14 border-2 border-gray-300 hover:bg-[#1a4d4d] hover:text-white hover:border-[#1a4d4d] disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex gap-8 px-4">
              {[...services, ...services, ...services].map((service, index) => {
                const Icon = iconMap[service.icon]
                return (
                  <motion.div
                    key={`${service.title}-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  >
                    <Card className="h-full bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-3 hover:border-[#1a4d4d]/40 rounded-2xl">
                      <CardContent className="p-10 h-full flex flex-col">
                        <div className="flex items-center justify-center mb-8">
                          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a4d4d] to-[#2d7a7a] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 ring-4 ring-[#1a4d4d]/10">
                            <Icon className="h-12 w-12 text-white" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-5 text-center group-hover:text-[#1a4d4d] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 flex-grow leading-relaxed text-center mb-8">
                          {service.description}
                        </p>
                        <div className="text-center">
                          <a href="#" className="text-[#1a4d4d] font-semibold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                            {siteConfig.services.cta.text}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(index)
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === (selectedIndex % services.length)
                    ? "bg-[#1a4d4d] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
