"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

interface User {
  username: string
  email: string
  first_name?: string
  last_name?: string
}

interface AuthProviderProps {
  children: ReactNode
  initialUser?: User | null
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (identifier: string, password: string) => Promise<void>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children, initialUser = null }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(initialUser)
  const [isLoading, setIsLoading] = useState(!initialUser)
  const router = useRouter()

  // Sincroniza o usuário inicial (vindo do servidor)
  useEffect(() => {
    if (initialUser) {
      setUser(initialUser)
      setIsLoading(false)
    } else {
      const initAuth = async () => {
        await refreshUser()
        setIsLoading(false)
      }
      initAuth()
    }
  }, [initialUser])

  const refreshUser = async () => {
    const token = Cookies.get("auth_token")
    if (!token) {
      setUser(null)
      return
    }

    try {
      const res = await fetch("/api/refresh", {
        method: "GET", // troque para POST se sua API precisar
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      })

      if (!res.ok) throw new Error("Falha ao atualizar usuário")
      const data = await res.json()
      setUser(data.user)
    } catch (err) {
      console.error("Erro no refresh:", err)
      setUser(null)
      Cookies.remove("auth_token")
    }
  }

  const login = async (identifier: string, password: string) => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
        credentials: "include",
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Falha no login")

      if (data.token) {
        Cookies.set("auth_token", data.token, { expires: 7 })
      }

      // Garante atualização imediata no contexto
      setUser(data.user || null)
      router.push("/dashboard")
    } catch (err) {
      console.error("Erro no login:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      await fetch("/api/logout", { method: "POST", credentials: "include" })
    } catch (err) {
      console.error("Erro no logout:", err)
    } finally {
      setUser(null)
      Cookies.remove("auth_token")
      router.push("/entrar")
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, refreshUser, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  return context
}
