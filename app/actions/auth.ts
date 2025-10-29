"use server"

import { cookies } from "next/headers"
import  ApiClient from "@/lib/api"
import { redirect } from "next/navigation"

export interface LoginResult {
  success: boolean
  error?: string
}

export async function loginAction(username: string, password: string): Promise<LoginResult> {
  try {
    const response = await ApiClient.login({ username, password })

    if (response.error || !response.data) {
      return {
        success: false,
        error: response.error || "Login failed",
      }
    }

    // Store tokens in HTTP-only cookies
    const cookieStore = await cookies()
    cookieStore.set("access_token", response.data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
    })

    cookieStore.set("refresh_token", response.data.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return { success: true }
  } catch (error) {
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

    // Clear cookies
    cookieStore.delete("access_token")
    cookieStore.delete("refresh_token")
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
      return false
    }

    // Update access token
    cookieStore.set("access_token", response.data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
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
