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
  },
}

export interface ApiResponse<T = any> {
  data?: T
  error?: string
  status: number
}

// ⚠️ Alteração aqui: identifier em vez de username
export interface LoginCredentials {
  identifier: string
  password: string
}

export interface AuthTokens {
  access: string
  refresh: string
}

export interface User {
  id: number
  username: string
  email: string
  first_name?: string
  last_name?: string
}

export interface UserRegistration {
  username: string
  email: string
  password: string
  first_name?: string
  last_name?: string
}

export interface UserUpdate {
  email?: string
  first_name?: string
  last_name?: string
  password?: string
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
  // 🧠 MÉTODOS DE AUTENTICAÇÃO
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
  // 👤 MÉTODOS DE USUÁRIO
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
}

// ====================
// 🚀 EXPORTAÇÃO PRONTA
// ====================
const apiClient = new ApiClient(API_BASE_URL)
export default apiClient
