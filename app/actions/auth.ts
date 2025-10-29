"use server"

import { cookies } from "next/headers"
import ApiClient from "@/lib/api"
import { redirect } from "next/navigation"

export interface LoginResult {
  success: boolean
  error?: string
  token?: string       
  refresh?: string      
  data?: any
}

export async function loginAction(identifier: string, password: string): Promise<LoginResult> {
  try {
    const response = await ApiClient.login({ identifier, password })

    if (response.error || !response.data) {
      return {
        success: false,
        error: response.error || "Login failed",
      }
    }

    const accessToken = response.data.access
    const refreshToken = response.data.refresh

    // Set authentication cookies
    const cookieStore = await cookies()
    cookieStore.set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    })

    cookieStore.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    cookieStore.set("username", identifier, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    })

    return {
      success: true,
      token: accessToken,   // <- retorna o token
      refresh: refreshToken // <- retorna o refresh
    }
  } catch (error) {
    console.error("Login action error:", error)
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}


export async function logoutAction(): Promise<void> {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_token")?.value

    if (accessToken) {
      await ApiClient.logout(accessToken)
    }

    // Clear all authentication cookies
    cookieStore.delete("access_token")
    cookieStore.delete("refresh_token")
    cookieStore.delete("username")
  } catch (error) {
    console.error("Logout error:", error)
  }

  redirect("/")
}

export async function refreshTokenAction(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const refreshToken = cookieStore.get("refresh_token")?.value

    if (!refreshToken) {
      return false
    }

    const response = await ApiClient.refresh(refreshToken)

    if (response.error || !response.data) {
      // Clear invalid tokens
      cookieStore.delete("access_token")
      cookieStore.delete("refresh_token")
      cookieStore.delete("username")
      return false
    }

    // Update access token
    cookieStore.set("access_token", response.data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    })

    return true
  } catch (error) {
    console.error("Token refresh error:", error)
    return false
  }
}

export async function getAccessToken(): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get("access_token")?.value || null
}

// Get current user from cookies (used in layout for SSR)
export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_token")?.value
    const username = cookieStore.get("username")?.value

    if (!accessToken || !username) {
      return null
    }

    const response = await ApiClient.getUserDetail(username, accessToken)

    if (response.error || !response.data) {
      return null
    }

    return response.data
  } catch (error) {
    console.error("Get current user error:", error)
    return null
  }
}
