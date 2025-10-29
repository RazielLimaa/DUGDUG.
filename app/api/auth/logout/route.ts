import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import ApiClient from "@/lib/api"

export async function POST() {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_token")?.value

    if (accessToken) {
      await ApiClient.logout(accessToken)
    }

    // Clear all auth cookies
    cookieStore.delete("access_token")
    cookieStore.delete("refresh_token")
    cookieStore.delete("username")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
