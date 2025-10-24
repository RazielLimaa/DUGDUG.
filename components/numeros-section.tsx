"use client"

import { OrganicShapeLeft, OrganicShapeRight } from "./organic-shapes"
import { motion } from "framer-motion"

export function NumerosSection() {
  const stats = [
    {
      number: "+5M",
      description: "Valor total economizado pelos membros em 12 meses.",
    },
    {
      number: "+45K",
      description: "Número de pessoas que já aproveitam os benefícios do clube.",
    },
    {
      number: "95%",
      description: "Porcentagem de membros que usam os benefícios mensalmente.",
    },
    {
      number: "+1K",
      description: "Número de empresas que oferecem descontos na sua plataforma.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block absolute left-0 top-0 bottom-0 w-[200px] lg:w-[250px] xl:w-[350px]"
      >
        <OrganicShapeLeft />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[200px] lg:w-[250px] xl:w-[350px]"
      >
        <OrganicShapeRight />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.p variants={itemVariants} className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
            Nossos números
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-balance px-4"
          >
            Dug Dug em Números:
            <br />O Impacto da Nossa Comunidade
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg relative max-w-5xl mx-auto"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={statVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-center sm:text-left"
              >
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4CE921] mb-2 sm:mb-3">{stat.number}</p>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
