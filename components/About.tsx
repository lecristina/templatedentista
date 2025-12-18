"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Sparkles, Shield, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site.config"

const iconMap: Record<string, typeof Award> = {
  Award,
  Sparkles,
  Shield,
  CheckCircle2,
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { badge, title, description, paragraphs, features, cta, image } = siteConfig.about

  return (
    <section id="sobre" ref={ref} className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
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
            {badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {title.line1}{" "}
            <span className="text-[#1a4d4d]">{title.highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-1"
          >
            <div className="space-y-6">
              {paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5 pt-4">
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#1a4d4d]/50 hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a4d4d] to-[#2d7a7a] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium pt-2">{feature.text}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1a4d4d] to-[#2d7a7a] hover:from-[#2d7a7a] hover:to-[#3d8a8a] text-white rounded-xl px-10 py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                {cta.text}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] w-full order-2 lg:order-2"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 ring-4 ring-gray-50">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center text-gray-500 p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold mb-2">{image.placeholder.title}</p>
                  <p className="text-sm opacity-70">
                    {image.placeholder.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
