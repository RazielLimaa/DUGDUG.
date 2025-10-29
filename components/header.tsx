"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, LogOut } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  const getUserInitial = () => {
    if (!user) return "?"
    if (user.first_name) return user.first_name.charAt(0).toUpperCase()
    if (user.username) return user.username.charAt(0).toUpperCase()
    return "U"
  }

  const handleLogout = async () => {
    await logout()
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] sm:w-[95%] max-w-7xl px-2 sm:px-0">
        <div className="bg-white rounded-full shadow-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l07pSsyyghggarXhBVkQhq8Lgz2Xvn.png"
                alt="Dug Dug"
                width={180}
                height={60}
                className="h-8 sm:h-10 w-auto cursor-pointer"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/afiliar-se" className="nav-link">Afiliar-se</Link>
            <Link href="/contato" className="nav-link">Contato</Link>
            <Link href="/afiliar-se" className="nav-link">Conhecer</Link>
            {user && <Link href="/dashboard" className="nav-link">Dashboard</Link>}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            { (
              user ? (
                <>
                  <Avatar className="h-10 w-10 border-2 border-[#4CE921]">
                    <AvatarFallback className="bg-[#4CE921] text-black font-bold text-lg">
                      {getUserInitial()}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="hidden sm:flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 bg-transparent"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => router.push("/entrar")}
                  className="hidden sm:flex bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold transition-all"
                >
                  Entrar
                </Button>
              )
            )}

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
                <Link href="/" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/afiliar-se" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Afiliar-se</Link>
                <Link href="/contato" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
                <Link href="/afiliar-se" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Conhecer</Link>
                {user && <Link href="/dashboard" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>}

                {!isLoading && (
                  user ? (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3 mb-6">
                        <Avatar className="h-12 w-12 border-2 border-[#4CE921]">
                          <AvatarFallback className="bg-[#4CE921] text-black font-bold text-xl">
                            {getUserInitial()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{user.first_name || user.username}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 justify-start bg-transparent border-red-200"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        router.push("/entrar")
                        setMobileMenuOpen(false)
                      }}
                      className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-8 py-6 text-base font-semibold mt-4"
                    >
                      Entrar
                    </Button>
                  )
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-link { color: #6b7280; transition: color 0.2s; font-weight: 500; }
        .nav-link:hover { color: #000; }
        .menu-link { color: #374151; transition: color 0.2s; font-weight: 500; padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; }
        .menu-link:hover { color: #000; }
      `}</style>
    </>
  )
}
