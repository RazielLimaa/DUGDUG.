"use client"

import { motion } from "framer-motion"

export function DepartamentosSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.p variants={itemVariants} className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
            Departamentos
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance px-4">
            Veja o que as empresas
            <br />
            dizem sobre o Dug Dug.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          <motion.div
            variants={leftVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gray-200 rounded-lg h-48 sm:h-56 lg:h-64 flex items-center justify-center"
          >
            <span className="text-gray-400 text-4xl sm:text-5xl lg:text-6xl font-bold">weh</span>
          </motion.div>
          <motion.div
            variants={rightVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                🐛
              </div>
            </motion.div>
            <div className="text-center">
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                "Depoimento sobre o Dug Dug. Descrição sobre o que a empresa que está apresentando"
              </p>
              <p className="font-bold text-xs sm:text-sm">Nome da Empresa/Dug Dug</p>
              <p className="text-gray-500 text-xs">Descrição sobre o que a empresa que está apresentando</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
