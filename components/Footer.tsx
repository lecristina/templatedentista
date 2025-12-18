"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site.config"

const iconMap: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  Linkedin,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { logo, description, social, quickLinks, services, contact, copyright } = siteConfig.footer

  return (
    <footer id="contato" className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a4d4d] to-[#2d7a7a] flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox={logo.icon.viewBox}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={logo.icon.path} />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight">{logo.name}</div>
                <div className="text-xs text-gray-400 -mt-1">{logo.subtitle}</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4">
              {social.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-11 h-11 rounded-lg bg-gray-800/50 flex items-center justify-center hover:bg-[#1a4d4d] transition-all duration-300 hover:scale-110 border border-gray-700/50"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="text-[#1a4d4d] group-hover:translate-x-1 transition-transform">»</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="text-[#1a4d4d] group-hover:translate-x-1 transition-transform">»</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6">Entre em Contato</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#1a4d4d] flex-shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#1a4d4d] flex-shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400">
            © {currentYear} {copyright.text}
          </p>
          <p className="text-gray-400 text-sm">
            {copyright.tagline}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
