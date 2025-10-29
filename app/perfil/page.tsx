// API Client for Django Backend Integration

import { authService } from "../actions/user"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || "api"

export interface ApiResponse<T = any> {
  data?: T
  error?: string
  status: number
}

class ApiClient {
  login(arg0: { username: string; password: string }) {
    throw new Error("Method not implemented.")
  }
  private baseUrl: string

  constructor() {
    this.baseUrl = `${API_BASE_URL}/${API_VERSION}`
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
          error: data?.message || data?.detail || "Erro ao processar requisição",
          status: response.status,
        }
      }

      return {
        data,
        status: response.status,
      }
    } catch (error) {
      console.error("[v0] API request error:", error)
      return {
        error: "Erro de conexão com o servidor",
        status: 500,
      }
    }
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "GET" })
  }

  async post<T>(endpoint: string, data?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T>(endpoint: string, data?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" })
  }
}

export const apiClient = new ApiClient()

// Convenience exports with alternative naming for backward compatibility
export const getUserDetail = (username: string) => authService.getUserDetails(username)
export const updateUserProfile = (data: any) => authService.updateUser(data)
export const logout = () => authService.logout()
export const getAccessToken = () => authService.getToken()
