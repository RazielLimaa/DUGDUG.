"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading: authLoading, refreshUser } = useAuth()
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalEarnings: "R$ 0,00",
    totalSales: 0,
    conversionRate: "0%",
  })
  useEffect(() => {

    const fetchData = async () => {
      try {
        await refreshUser()
        const res = await fetch("/api/affiliate/stats", { credentials: "include" })
        if (res.ok) setStats(await res.json())
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [authLoading, user, router, refreshUser])

  if (authLoading || loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )

  return (
    <div className="p-8">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6">
        Dashboard
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total a Receber</CardTitle>
          </CardHeader>
          <CardContent>{stats.totalEarnings}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total de Vendas</CardTitle>
          </CardHeader>
          <CardContent>{stats.totalSales}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Taxa de Conversão</CardTitle>
          </CardHeader>
          <CardContent>{stats.conversionRate}</CardContent>
        </Card>
      </div>
    </div>
  )
}
