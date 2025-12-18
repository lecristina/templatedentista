"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { siteConfig } from "@/config/site.config"

const blogPosts = siteConfig.blog.posts

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a4d4d]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2d7a7a]/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#1a4d4d]/10 text-[#1a4d4d] font-semibold mb-6 text-sm tracking-wider uppercase border border-[#1a4d4d]/20">
            {siteConfig.blog.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {siteConfig.blog.title.line1}{" "}
            <span className="text-[#1a4d4d]">{siteConfig.blog.title.highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.blog.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden hover:-translate-y-3 hover:border-[#1a4d4d]/40 rounded-2xl">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#1a4d4d]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#1a4d4d]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span className="px-5 py-2 bg-[#1a4d4d]/10 text-[#1a4d4d] rounded-full text-xs font-semibold mb-6 inline-block border border-[#1a4d4d]/20">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-[#1a4d4d] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-[#1a4d4d] hover:text-[#2d7a7a] p-0 font-semibold group w-full justify-start"
                  >
                    {siteConfig.blog.readMore}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#1a4d4d] to-[#2d7a7a] hover:from-[#2d7a7a] hover:to-[#3d8a8a] text-white rounded-xl px-10 py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
          >
            {siteConfig.blog.cta.text}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
