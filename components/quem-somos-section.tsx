"use client"

import { Play } from "lucide-react"
import { motion } from "framer-motion"

export function QuemSomosSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:block absolute -left-48 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[3px] border-[#4CE921] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={leftVariants} className="space-y-3 sm:space-y-4 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Sobre Nós</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black text-balance">
              Quem Somos?
              <br />
              Conectando
              <br />
              Vantagens.
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Conheça o clube que nasceu para simplificar sua economia e trazer descontos reais para o seu dia a dia.
            </p>
          </motion.div>

          <motion.div
            variants={rightVariants}
            className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <div className="text-center space-y-3 sm:space-y-4">
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto cursor-pointer"
              >
                <Play className="w-5 h-5 sm:w-7 sm:h-7 text-gray-800 ml-1" fill="currentColor" />
              </motion.div>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400">
                w<sup className="text-2xl sm:text-3xl lg:text-4xl">e</sup>h
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
