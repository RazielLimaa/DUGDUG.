"use client"

import { Shield, CheckCircle, Repeat } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function CelularBeneficiosSection() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.p variants={itemVariants} className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
            O que fazemos por você
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-balance px-4"
          >
            Transformamos a sua fidelidade em economia
            <br className="hidden sm:block" />
            real, instantânea e sem complicação.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={imageVariants} className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J5cC9MeyIWZmnHCXhE3UgFlDCeVAun.png"
                alt="Desconto Ativado - Phone mockup showing activated discount"
                width={400}
                height={600}
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto"
                priority
              />
            </div>
          </motion.div>

          <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#4CE921] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CE921]" />
              </div>
              <p className="text-white font-medium leading-relaxed pt-1 sm:pt-2 text-sm sm:text-base">
                Acesso o cliente a promos especiais em grandes marcas e serviços.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#4CE921] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CE921]" />
              </div>
              <p className="text-white font-medium leading-relaxed pt-1 sm:pt-2 text-sm sm:text-base">
                Utilize seus benefícios no home, sem pontos ou burocracias.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#4CE921] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Repeat className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CE921]" />
              </div>
              <p className="text-white font-medium leading-relaxed pt-1 sm:pt-2 text-sm sm:text-base">
                Vantagens associadas com um clique, completamente sem economia.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
