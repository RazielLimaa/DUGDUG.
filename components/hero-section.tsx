"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#4CE921] rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#4CE921] rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      {/* Decorative circles - hidden on mobile for cleaner look */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden sm:block absolute top-32 left-8 w-6 h-6 sm:w-8 sm:h-8 bg-[#4CE921] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden sm:block absolute bottom-32 left-16 w-4 h-4 sm:w-6 sm:h-6 bg-[#4CE921] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="hidden md:block absolute top-1/2 right-1/3 w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#4CE921] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute bottom-20 right-20 w-96 h-96 border border-[#4CE921] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
        >
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black text-balance"
            >
              Descontos reais.
              <br />É só dar <span className="text-[#4CE921]">Dug Dug</span> e<br />
              usar!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#337B1E] text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium"
            >
              Sua plataforma de descontos e vantagens exclusivas, sem letras miúdas.
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-2 sm:gap-3">
            {[
              { src: "/homem-usando-app-dug-dug.jpg", alt: "Homem usando app" },
              { src: "/video-call-dug-dug.jpg", alt: "Video call" },
              { src: "/pessoas-usando-dug-dug.jpg", alt: "Pessoas usando" },
              { src: "/grupo-amigos-dug-dug.jpg", alt: "Grupo de amigos" },
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="col-span-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"
      />
    </section>
  )
}
