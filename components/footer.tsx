"use client"

import Image from "next/image"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12">
          <motion.div variants={itemVariants} className="lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l07pSsyyghggarXhBVkQhq8Lgz2Xvn.png"
                  alt="Dug Dug"
                  width={180}
                  height={60}
                  className="h-10 sm:h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Dug Dug — o patinho que entende de vantagens.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="font-bold text-black mb-4 sm:mb-6 text-sm sm:text-base">Conhecer</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/afiliar-se"
                  className="text-gray-600 text-xs sm:text-sm hover:text-primary transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                >
                  Conhecer Dug Dug
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-xs sm:text-sm hover:text-primary transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="font-bold text-black mb-4 sm:mb-6 text-sm sm:text-base">Menu</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 text-xs sm:text-sm hover:text-primary transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-xs sm:text-sm hover:text-primary transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-xs sm:text-sm hover:text-primary transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                >
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-xs sm:text-sm hover:text-primary transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="font-bold text-black mb-4 sm:mb-6 text-sm sm:text-base">Nossas Redes Sociais</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {[
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Facebook, label: "Facebook" },
                {
                  icon: () => (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  ),
                  label: "TikTok",
                },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                {
                  icon: () => (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                  label: "YouTube",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-primary rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300 ease-out group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300 ease-out">
                    {typeof social.icon === "function" ? (
                      <social.icon />
                    ) : (
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-gray-200 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">Copyright © 2025 Dug Dug | Todos os direitos reservados.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
