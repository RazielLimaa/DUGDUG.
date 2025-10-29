"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, Users, ShoppingCart, Calendar, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getAffiliateStats, getAffiliateSales, getAccessToken } from "@/lib/api"

export default function DashboardPage() {
  const router = useRouter()
  const [stats, setStats] = useState({
    totalEarnings: "R$ 0,00",
    pendingEarnings: "R$ 0,00",
    totalSales: 0,
    conversionRate: "0%",
    thisMonthSales: 0,
    lastMonthSales: 0,
  })
  const [recentSales, setRecentSales] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const token = getAccessToken()
    if (!token) {
      console.log("[v0] No token found, redirecting to login")
      router.push("/entrar")
      return
    }

    // Fetch dashboard data
    const fetchDashboardData = async () => {
      console.log("[v0] Fetching dashboard data")

      const [statsResponse, salesResponse] = await Promise.all([getAffiliateStats(), getAffiliateSales()])

      if (statsResponse.data) {
        console.log("[v0] Stats data received:", statsResponse.data)
        setStats({
          totalEarnings: statsResponse.data.totalEarnings || "R$ 0,00",
          pendingEarnings: statsResponse.data.pendingEarnings || "R$ 0,00",
          totalSales: statsResponse.data.totalSales || 0,
          conversionRate: statsResponse.data.conversionRate || "0%",
          thisMonthSales: statsResponse.data.thisMonthSales || 0,
          lastMonthSales: statsResponse.data.lastMonthSales || 0,
        })
      }

      if (salesResponse.data) {
        console.log("[v0] Sales data received:", salesResponse.data)
        setRecentSales(salesResponse.data.sales || [])
      }

      setLoading(false)
    }

    fetchDashboardData()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#4CE921] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Dashboard do Afiliado</h1>
              <p className="text-gray-600">Acompanhe seu desempenho e ganhos em tempo real</p>
            </div>
            <Link href="/perfil">
              <Button className="bg-[#4CE921] hover:bg-[#3DD118] text-black font-semibold">Ver Perfil</Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <Card className="border-2 hover:border-[#4CE921] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total a Receber</CardTitle>
                <div className="w-10 h-10 rounded-full bg-[#4CE921]/20 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-[#4CE921]" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-3xl font-bold text-black">{stats.totalEarnings}</div>
                <p className="text-xs text-gray-500 mt-1">Comissões acumuladas</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Card className="border-2 hover:border-[#4CE921] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Pendente</CardTitle>
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-3xl font-bold text-black">{stats.pendingEarnings}</div>
                <p className="text-xs text-gray-500 mt-1">Aguardando confirmação</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <Card className="border-2 hover:border-[#4CE921] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total de Vendas</CardTitle>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-3xl font-bold text-black">{stats.totalSales}</div>
                <p className="text-xs text-gray-500 mt-1">Vendas realizadas</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <Card className="border-2 hover:border-[#4CE921] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Taxa de Conversão</CardTitle>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-3xl font-bold text-black">{stats.conversionRate}</div>
                <p className="text-xs text-gray-500 mt-1">Cliques para vendas</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="mb-8"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Desempenho Mensal</CardTitle>
              <CardDescription>Comparação de vendas dos últimos meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#4CE921]"></div>
                    <span className="text-sm font-medium">Este Mês</span>
                  </div>
                  <span className="text-2xl font-bold">{stats.thisMonthSales} vendas</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#4CE921] h-3 rounded-full" style={{ width: "60%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <span className="text-sm font-medium">Mês Anterior</span>
                  </div>
                  <span className="text-2xl font-bold">{stats.lastMonthSales} vendas</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gray-400 h-3 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Sales Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <Card className="border-2">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div>
                <CardTitle className="text-xl font-bold">Vendas Recentes</CardTitle>
                <CardDescription>Suas últimas transações e comissões</CardDescription>
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Cliente</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Plano</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Valor</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Data</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSales.map((sale, index) => (
                      <motion.tr
                        key={sale.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-4 text-sm font-medium text-black">{sale.customer}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{sale.plan}</td>
                        <td className="py-4 px-4 text-sm font-semibold text-[#4CE921]">{sale.value}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{sale.date}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              sale.status === "Confirmado"
                                ? "bg-[#4CE921]/20 text-[#4CE921]"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {sale.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <Card className="border-2 hover:border-[#4CE921] transition-all duration-300 cursor-pointer hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4CE921]/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#4CE921]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Compartilhar Link</h3>
                  <p className="text-sm text-gray-600">Divulgue seu cupom</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[#4CE921] transition-all duration-300 cursor-pointer hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Materiais de Divulgação</h3>
                  <p className="text-sm text-gray-600">Baixe banners e artes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[#4CE921] transition-all duration-300 cursor-pointer hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Relatórios Detalhados</h3>
                  <p className="text-sm text-gray-600">Análise completa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
