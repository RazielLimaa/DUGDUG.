// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { getCurrentUser } from "@/app/actions/auth"
import { AuthProvider } from "@/contexts/auth-context"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Tipagem do usuário
interface User {
  username: string
  email: string
  first_name?: string
  last_name?: string
}

// Tipagem do layout props
interface RootLayoutProps {
  children: React.ReactNode
}

// RootLayout é Server Component
export default async function RootLayout({ children }: RootLayoutProps) {
  // Busca o usuário logado do servidor (Server Component)
  const user: User | null = await getCurrentUser()

  return (
    <html lang="pt-BR" className={`${_geist.className} ${_geistMono.className}`}>
      <body className="font-sans antialiased">
        <AuthProvider initialUser={user}>
          {children}
        <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
