import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import ApiClient from "@/lib/api"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_token")?.value
    const username = cookieStore.get("username")?.value

    if (!accessToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    if (!username) {
      return NextResponse.json({ error: "User data not found" }, { status: 401 })
    }

    // Fetch full user details from backend API
    const response = await ApiClient.getUserDetail(username, accessToken)

    if (response.error || !response.data) {
      return NextResponse.json({ error: "Failed to fetch user" }, { status: 401 })
    }

    return NextResponse.json(response.data)
  } catch (error) {
    console.error("Auth me error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
