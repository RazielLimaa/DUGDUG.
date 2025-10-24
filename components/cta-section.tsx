"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Pronto para começar?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base px-4">
            Interessado em trazer para o clube que te dá tudo que você quer?
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                Aderir ao Clube Dug Dug
              </Button>
            </motion.div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-gray-400 text-xs mt-3 sm:mt-4">
            * Garanta sua vaga sem sair do seu sofá
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
