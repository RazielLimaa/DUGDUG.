import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import ApiClient from "@/lib/api"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { identifier, password } = body

    // Call the external API
    const response = await ApiClient.login({ identifier, password })

    if (response.error || !response.data) {
      return NextResponse.json({ error: response.error || "Login failed" }, { status: 401 })
    }

    // Store tokens in HTTP-only cookies for security
    const cookieStore = await cookies()
    cookieStore.set("access_token", response.data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    })

    cookieStore.set("refresh_token", response.data.refresh, {
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
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Login API error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
