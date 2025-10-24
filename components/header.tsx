"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] sm:w-[95%] max-w-7xl px-2 sm:px-0">
        <div className="bg-white rounded-full shadow-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l07pSsyyghggarXhBVkQhq8Lgz2Xvn.png"
                alt="Dug Dug"
                width={180}
                height={60}
                className="h-8 sm:h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-gray-500 hover:text-black text-sm xl:text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/afiliar-se"
              className="text-gray-500 hover:text-black text-sm xl:text-base font-medium transition-colors"
            >
              Afiliar-se
            </Link>
            <Link
              href="/contato"
              className="text-gray-500 hover:text-black text-sm xl:text-base font-medium transition-colors"
            >
              Contato
            </Link>
            <Link
              href="/afiliar-se"
              className="text-gray-500 hover:text-black text-sm xl:text-base font-medium transition-colors"
            >
              Conhecer
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/entrar">
              <Button className="hidden sm:flex bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold">
                Entrar
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-6 mt-16">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-black text-lg font-medium transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/afiliar-se"
                  className="text-gray-700 hover:text-black text-lg font-medium transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Afiliar-se
                </Link>
                <Link
                  href="/contato"
                  className="text-gray-700 hover:text-black text-lg font-medium transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
                <Link
                  href="/afiliar-se"
                  className="text-gray-700 hover:text-black text-lg font-medium transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Conhecer
                </Link>
                <Link href="/entrar" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-8 py-6 text-base font-semibold mt-4">
                    Entrar
                  </Button>
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
