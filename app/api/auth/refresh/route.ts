import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import ApiClient from "@/lib/api"

export async function POST() {
  try {
    const cookieStore = await cookies()
    const refreshToken = cookieStore.get("refresh_token")?.value

    if (!refreshToken) {
      return NextResponse.json({ error: "No refresh token found" }, { status: 401 })
    }

    // Chama a API para renovar o token
    const response = await ApiClient.refresh(refreshToken)

    if (response.error || !response.data) {
      // Se o refresh token também expirou, limpa os cookies
      cookieStore.delete("access_token")
      cookieStore.delete("refresh_token")
      cookieStore.delete("username")

      return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 })
    }

    // Atualiza o access token no cookie
    cookieStore.set("access_token", response.data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hora
    })

    // Se a API retornar um novo refresh token, atualiza também
    if (response.data.refresh) {
      cookieStore.set("refresh_token", response.data.refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 dias
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Token refresh error:", error)
    return NextResponse.json({ error: "Failed to refresh token" }, { status: 500 })
  }
}
