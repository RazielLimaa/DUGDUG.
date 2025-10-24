"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function DepoimentosSection() {
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

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">Depoimentos</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-balance px-4">
              Veja o que as empresas
              <br />
              dizem sobre o Dug Dug.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <motion.div
              variants={itemVariants}
              className="relative aspect-video bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <p className="text-gray-500 text-sm sm:text-base">Espaço para conteúdo</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center mb-4 sm:mb-6"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ISf6R0iXzA1q5Znvrl6C8eZGYUfP9k.png"
                  alt="Mascote Dug Dug"
                  width={120}
                  height={120}
                  className="object-contain w-20 h-20 sm:w-28 sm:h-28"
                />
              </motion.div>

              <p className="text-gray-800 text-center mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx."
              </p>

              <div className="text-center">
                <p className="font-bold text-gray-900 text-xs sm:text-sm mb-1">(Nome do Responsável do Dug)</p>
                <p className="text-gray-600 text-xs">"Descrição sobre o quem é a pessoa que está apresentando"</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
