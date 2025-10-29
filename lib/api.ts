// ====================
// 🌐 CONFIGURAÇÃO BASE
// ====================
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000"

// ====================
// 🔗 ROTAS DA API
// ====================
const routes = {
  auth: {
    login: "/login/",
    logout: "/logout/",
    refresh: "/refresh/",
  },
  user: {
    create: "/user/create/",
    detail: (username: string) => `/user/detail/${username}/`,
    list: "/user/list/",
    delete: "/user/delete/",
    update: "/user/update/",
  },
  affiliate: {
    base: "/affiliate/",
    stats: "/affiliate/stats/",
    sales: "/affiliate/sales/",
  },
  payout: {
    base: "/payout/",
  },
}

// ====================
// 🧩 TIPAGENS GERAIS
// ====================
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  status: number
}

export interface AuthTokens {
  access: string
  refresh: string
}

export interface LoginCredentials {
  identifier: string
  password: string
}

export interface User {
  id: number
  username: string
  email: string
  first_name?: string
  last_name?: string
  cpf?: string
  phone?: string
}

export interface UserRegistration {
  username: string
  email: string
  password: string
  first_name?: string
  last_name?: string
  cpf?: string
  phone?: string
}

export interface UserUpdate {
  email?: string
  first_name?: string
  last_name?: string
  password?: string
  phone?: string
  cpf?: string
}

// Afiliado
export interface Affiliate {
  id: number
  code: string
  pix_key: string
  pix_key_type: "cpf" | "email" | "phone" | "aleatoria"
  commission_balance: string
  total_earned: string
}

// Saque
export interface Payout {
  id: number
  amount: string
  status: "pending" | "paid" | "rejected"
  notes?: string
  created_at?: string
  paid_at?: string
}

// ====================
// ⚙️ CLIENTE PRINCIPAL
// ====================
class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        return {
          error: data?.detail || data?.message || "Erro na requisição",
          status: response.status,
        }
      }

      return {
        data,
        status: response.status,
      }
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Erro de rede",
        status: 0,
      }
    }
  }

  // ====================
  // 🔐 AUTENTICAÇÃO
  // ====================
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthTokens>> {
    return this.request<AuthTokens>(routes.auth.login, {
      method: "POST",
      body: JSON.stringify(credentials),
    })
  }

  async logout(token: string): Promise<ApiResponse> {
    return this.request(routes.auth.logout, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async refresh(refreshToken: string): Promise<ApiResponse<AuthTokens>> {
    return this.request<AuthTokens>(routes.auth.refresh, {
      method: "POST",
      body: JSON.stringify({ refresh: refreshToken }),
    })
  }

  // ====================
  // 👤 USUÁRIOS
  // ====================
  async createUser(userData: UserRegistration): Promise<ApiResponse<User>> {
    return this.request<User>(routes.user.create, {
      method: "POST",
      body: JSON.stringify(userData),
    })
  }

  async getUserDetail(username: string, token: string): Promise<ApiResponse<User>> {
    return this.request<User>(routes.user.detail(username), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async listUsers(token: string): Promise<ApiResponse<User[]>> {
    return this.request<User[]>(routes.user.list, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async updateUser(userData: UserUpdate, token: string): Promise<ApiResponse<User>> {
    return this.request<User>(routes.user.update, {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async deleteUser(token: string): Promise<ApiResponse> {
    return this.request(routes.user.delete, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  // ====================
  // 🤝 AFILIADOS
  // ====================
  async createAffiliate(data: { pix_key: string; pix_key_type: string }, token: string): Promise<ApiResponse<Affiliate>> {
    return this.request<Affiliate>(routes.affiliate.base, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async listAffiliates(token: string): Promise<ApiResponse<Affiliate[]>> {
    return this.request<Affiliate[]>(routes.affiliate.base, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async getAffiliateStats(token: string): Promise<ApiResponse<any>> {
    return this.request<any>(routes.affiliate.stats, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async getAffiliateSales(token: string): Promise<ApiResponse<any>> {
    return this.request<any>(routes.affiliate.sales, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async updateAffiliate(id: number, data: Partial<Affiliate>, token: string): Promise<ApiResponse<Affiliate>> {
    return this.request<Affiliate>(`${routes.affiliate.base}${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  // ====================
  // 💸 SAQUES (PAYOUTS)
  // ====================
  async createPayout(data: { amount: string; notes?: string }, token: string): Promise<ApiResponse<Payout>> {
    return this.request<Payout>(routes.payout.base, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async listPayouts(token: string): Promise<ApiResponse<Payout[]>> {
    return this.request<Payout[]>(routes.payout.base, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async updatePayout(id: number, data: Partial<Payout>, token: string): Promise<ApiResponse<Payout>> {
    return this.request<Payout>(`${routes.payout.base}${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    })
  }
}

// ====================
// 🚀 EXPORTAÇÃO FINAL
// ====================
const apiClient = new ApiClient(API_BASE_URL)
export default apiClient
