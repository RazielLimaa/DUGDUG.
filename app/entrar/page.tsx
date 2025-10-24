"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function EntrarPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20 sm:py-24">
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-bold text-black">Faça o login</h1>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  viage num mundo de oportunidades, conheça formas de entender e conhecer novos benefícios
                </p>
              </div>

              <form className="space-y-5 mt-8">
                <div>
                  <Input
                    type="text"
                    placeholder="Usuario"
                    className="w-full px-5 py-6 rounded-full border-2 border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
                  />
                </div>

                <div>
                  <Input
                    type="password"
                    placeholder="PassWord"
                    className="w-full px-5 py-6 rounded-full border-2 border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
                  />
                </div>

                <div className="flex justify-start">
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                    esqueceu a senha?
                  </Link>
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-[#4CE921] hover:bg-[#3DD118] text-black font-bold text-base py-6 rounded-full transition-all duration-300 hover:scale-[1.02]"
                  >
                    Login
                  </Button>

                  <Button
                    type="button"
                    className="w-full bg-[#4CE921] hover:bg-[#3DD118] text-black font-bold text-base py-6 rounded-full transition-all duration-300 hover:scale-[1.02]"
                  >
                    Crie Sua Conta
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Illustration Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#EFFF4D] via-[#4CE921] to-[#4CE921] p-12 shadow-2xl">
              <div className="relative bg-gradient-to-br from-[#F5FF9E] to-[#4CE921]/30 rounded-2xl p-10 backdrop-blur-sm">
                <div className="space-y-6">
                  <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                    <span className="text-black">Expanda seus</span>
                    <br />
                    <span className="text-white">horizontes,</span>
                    <br />
                    <span className="text-black">conheça</span>
                    <br />
                    <span className="text-black">DUGDUG!</span>
                  </h2>

                  <div className="flex justify-center pt-4">
                    <Image
                      src="/login-illustration.png"
                      alt="Equipe Dug Dug"
                      width={400}
                      height={300}
                      className="w-full max-w-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:hidden"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#EFFF4D] via-[#4CE921] to-[#4CE921] p-8 shadow-xl">
              <div className="relative bg-gradient-to-br from-[#F5FF9E] to-[#4CE921]/30 rounded-2xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                  <span className="text-black">Expanda seus </span>
                  <span className="text-white">horizontes, </span>
                  <span className="text-black">conheça DUGDUG!</span>
                </h2>

                <div className="flex justify-center">
                  <Image
                    src="/login-illustration.png"
                    alt="Equipe Dug Dug"
                    width={300}
                    height={200}
                    className="w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
