"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

interface User {
  username: string
  email: string
  first_name?: string
  last_name?: string
}

interface AuthContextType {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children, initialUser }: { children: ReactNode; initialUser?: User | null }) {
  const [user, setUser] = useState<User | null>(initialUser || null)
  const router = useRouter()

  // ✅ Carrega token e usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedToken = localStorage.getItem("token")

    if (storedUser && storedToken && !user) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        console.error("Erro ao carregar usuário do localStorage:", error)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
      }
    }
  }, [])

  // ✅ Sempre que o usuário mudar, salva no localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
      const token = Cookies.get("token") // pega o token do cookie se existir
      if (token) localStorage.setItem("token", token)
    } else {
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    }
  }, [user])

  // ✅ Função de logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    Cookies.remove("token")
    router.push("/entrar")
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  return context
}
