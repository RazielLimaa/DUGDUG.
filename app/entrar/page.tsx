"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginAction } from "@/app/actions/auth"
import { useAuth } from "@/contexts/auth-context"
import Cookies from "js-cookie"

export default function EntrarPage() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [isLoading, setIsLoading] = useState(false)
const router = useRouter()
const { setUser } = useAuth()

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()
setError("")
setIsLoading(true)

try {
  console.log("[login] Iniciando login...")
  const result = await loginAction(username, password)
  console.log("[login] Resultado do loginAction:", result)

  if (!result.success || !result.token) {
    throw new Error(result.error || "Falha ao fazer login. Token não encontrado.")
  }

  // 🔒 Salva o token localmente
  Cookies.set("auth_token", result.token, { expires: 30 })
  localStorage.setItem("auth_token", result.token)
  console.log("[login] Token salvo:", result.token)

  // 🔁 Busca dados do usuário usando o refresh token
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""
  const resUser = await fetch(`${apiUrl}/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: result.refresh }),
  })

  if (!resUser.ok) {
    throw new Error("Não foi possível obter informações do usuário.")
  }

  const userData = await resUser.json()
  console.log("[login] Usuário autenticado:", userData)

  // ✅ Define o usuário no contexto e salva em Cookie para persistência
  const userToSave = userData.user || userData
  if (setUser) {
    setUser(userToSave)
  }

  // 🔒 Salva o usuário no cookie para restaurar depois
  Cookies.set("user", JSON.stringify(userToSave), { expires: 7 })

  // ✅ Redireciona para dashboard/home
  router.push("/")
  router.refresh()
} catch (err: any) {
  console.error("[login] Erro inesperado:", err)
  setError(err.message || "Ocorreu um erro inesperado. Tente novamente.")
} finally {
  setIsLoading(false)
}


}

return (
<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20 sm:py-24">
<div className="w-full max-w-6xl">
<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
{/* Formulário */}
<motion.div
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg border border-gray-100"
>
<div className="space-y-6">
<div className="space-y-3">
<h1 className="text-4xl sm:text-5xl font-bold text-black">Faça o login</h1>
<p className="text-gray-600 text-sm sm:text-base leading-relaxed">
Viage num mundo de oportunidades, conheça formas de entender e conhecer novos benefícios.
</p>
</div>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-full text-sm">
                {error}
              </div>
            )}

            <Input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
              className="w-full px-5 py-6 rounded-full border-2 border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
            />

            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="w-full px-5 py-6 rounded-full border-2 border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
            />

            <div className="flex justify-start">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Esqueceu a senha?
              </Link>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#4CE921] hover:bg-[#3DD118] text-black font-bold text-base py-6 rounded-full transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Entrando..." : "Login"}
              </Button>

              <Button
                type="button"
                disabled={isLoading}
                onClick={() => router.push("/cadastro")}
                className="w-full bg-[#4CE921] hover:bg-[#3DD118] text-black font-bold text-base py-6 rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                Crie Sua Conta
              </Button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Ilustração */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
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
    </div>
  </div>
</div>


)
}