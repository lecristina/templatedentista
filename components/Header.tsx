"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/config/site.config"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { logo, navigation, cta } = siteConfig.header
  const navItems = navigation

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-xl border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href={logo.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a4d4d] to-[#2d7a7a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox={logo.icon.viewBox}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={logo.icon.path} />
              </svg>
            </div>
            <div>
              <div className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-[#1a4d4d]" : "text-white"}`}>{logo.name}</div>
              <div className={`text-xs -mt-1 transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/80"}`}>{logo.subtitle}</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#1a4d4d] hover:bg-gray-50/80"
                    : "text-white hover:text-white/90 hover:bg-white/10"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-[#1a4d4d]" : "bg-white"
                } group-hover:w-3/4`}></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className={`rounded-lg px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
              isScrolled
                ? "bg-gradient-to-r from-[#1a4d4d] to-[#2d7a7a] hover:from-[#2d7a7a] hover:to-[#3d8a8a] text-white"
                : "bg-white text-[#1a4d4d] hover:bg-gray-50"
            }`}>
              {cta.text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden overflow-hidden border-t transition-colors duration-300 ${
                isScrolled
                  ? "bg-white border-gray-100"
                  : "bg-white/95 backdrop-blur-md border-white/20"
              }`}
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#1a4d4d] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="px-4 pt-4">
                  <Button className="w-full bg-gradient-to-r from-[#1a4d4d] to-[#2d7a7a] text-white rounded-lg py-3 font-semibold">
                    {cta.text}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
