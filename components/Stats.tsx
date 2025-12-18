"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { siteConfig } from "@/config/site.config"

const stats = siteConfig.stats.items

function AnimatedNumber({ value, delay, suffix }: { value: string; delay: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = React.useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  React.useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      if (value.includes("/")) {
        setDisplayValue(0)
      } else {
        const num = parseInt(value.replace(/\./g, ""))
        let current = 0
        const increment = num / 30
        const interval = setInterval(() => {
          current += increment
          if (current >= num) {
            setDisplayValue(num)
            clearInterval(interval)
          } else {
            setDisplayValue(Math.floor(current))
          }
        }, 20)
        return () => clearInterval(interval)
      }
    }, delay * 100)

    return () => clearTimeout(timer)
  }, [isInView, value, delay])

  if (value.includes("/")) {
    return <span ref={ref}>{value}</span>
  }
  
  if (value === "4500") {
    const formatted = displayValue >= 1000 ? `${Math.floor(displayValue / 1000)}.${Math.floor((displayValue % 1000) / 100)}00` : `${displayValue}`
    return <span ref={ref}>{formatted}{suffix || ""}</span>
  }
  
  return <span ref={ref}>{displayValue}{suffix || ""}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0d3d3d] to-[#0f4a4a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-72 h-72 bg-[#2d7a7a]/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-[#7fb3b3]/12 rounded-full blur-3xl"
        ></motion.div>
        
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-[#4a9d9d]/12 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#5ab3b3]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#4a9d9d]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 h-full flex flex-col items-center text-center hover:-translate-y-2 ring-2 ring-transparent hover:ring-[#4a9d9d]/40">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                  }}
                  className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-[0_0_20px_rgba(127,179,179,0.5)]"
                >
                  <AnimatedNumber value={stat.number} delay={index * 0.1 + 0.3} suffix={stat.suffix} />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#7fb3b3] transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
