"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { UserPlus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import apiClient from "@/lib/api"
import { useRouter } from "next/navigation"

export default function CadastroPage() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const first_name = formData.get("firstName") as string
    const last_name = formData.get("lastName") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string
    const cpf = formData.get("cpf") as string
    const phone = formData.get("phone") as string

    if (password !== confirmPassword) {
      setError("As senhas não coincidem")
      setIsLoading(false)
      return
    }

    try {
      const response = await apiClient.createUser({
        username,
        email,
        password,
        first_name,
        last_name,
      })

      if (response.error) {
        // Tratamento de erros do Django
        if (typeof response.error === "object") {
          const messages: string[] = []
          for (const key in response.error) {
            if (Array.isArray(response.error[key])) {
              messages.push(`${key}: ${response.error[key].join(", ")}`)
            }
          }
          setError(messages.join(" | "))
        } else {
          setError(response.error)
        }
        setIsLoading(false)
        return
      }

      // Usuário criado com sucesso
      router.push("/entrar?registered=true")
    } catch (err) {
      console.error("Erro ao criar usuário:", err)
      setError("Ocorreu um erro ao criar a conta. Tente novamente.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CE921]/20 via-white to-white" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4CE921]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#4CE921]/5 rounded-full blur-3xl" />

        <div className="max-w-md mx-auto relative z-10">
          <motion.div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#4CE921] rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Criar Conta</h1>
            <p className="text-gray-600">Junte-se à comunidade Dug Dug</p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Nome de usuário *</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="seu_usuario"
                  className="h-12"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="h-12"
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" name="firstName" type="text" placeholder="João" className="h-12" disabled={isLoading} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" name="lastName" type="text" placeholder="Silva" className="h-12" disabled={isLoading} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha *</Label>
                <Input id="password" name="password" type="password" required placeholder="••••••••" className="h-12" disabled={isLoading} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
                <Input id="confirmPassword" name="confirmPassword" type="password" required placeholder="••••••••" className="h-12" disabled={isLoading} />
              </div>

              {/* Campo CPF opcional */}
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" name="cpf" type="text" placeholder="000.000.000-00" className="h-12" disabled={isLoading} />
              </div>

              {/* Campo telefone opcional */}
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" type="text" placeholder="(11) 99999-9999" className="h-12" disabled={isLoading} />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white h-12 text-base font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Criando conta..." : "Criar Conta"}
              </Button>

              <p className="text-center text-sm text-gray-600">
                Já tem uma conta?{" "}
                <Link href="/entrar" className="text-[#0066FF] hover:underline font-semibold">
                  Entrar
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
