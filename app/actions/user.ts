"use server"

import { cookies } from "next/headers"
import ApiClient from "@/lib/api"

// Legacy authService for backward compatibility
// This wraps the new cookie-based auth system
export const authService = {
  async getUserDetails(username: string) {
    try {
      const cookieStore = await cookies()
      const accessToken = cookieStore.get("access_token")?.value

      if (!accessToken) {
        throw new Error("Not authenticated")
      }

      const response = await ApiClient.getUserDetail(username, accessToken)

      if (response.error || !response.data) {
        throw new Error(response.error || "Failed to fetch user details")
      }

      return response.data
    } catch (error) {
      console.error("Get user details error:", error)
      throw error
    }
  },

  async updateUser(data: any) {
    try {
      const cookieStore = await cookies()
      const accessToken = cookieStore.get("access_token")?.value

      if (!accessToken) {
        throw new Error("Not authenticated")
      }

      const response = await ApiClient.updateUser(data, accessToken)

      if (response.error || !response.data) {
        throw new Error(response.error || "Failed to update user")
      }

      return response.data
    } catch (error) {
      console.error("Update user error:", error)
      throw error
    }
  },

  async logout() {
    try {
      const cookieStore = await cookies()
      const accessToken = cookieStore.get("access_token")?.value

      if (accessToken) {
        await ApiClient.logout(accessToken)
      }

      cookieStore.delete("access_token")
      cookieStore.delete("refresh_token")
      cookieStore.delete("username")
    } catch (error) {
      console.error("Logout error:", error)
      throw error
    }
  },

  async getToken() {
    try {
      const cookieStore = await cookies()
      return cookieStore.get("access_token")?.value || null
    } catch (error) {
      console.error("Get token error:", error)
      return null
    }
  },
}
