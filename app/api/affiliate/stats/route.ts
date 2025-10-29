import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import ApiClient from "@/lib/api"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_token")?.value

    if (!accessToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const response = await ApiClient.getAffiliateStats(accessToken)

    if (response.error || !response.data) {
      return NextResponse.json({ error: response.error || "Failed to fetch stats" }, { status: 400 })
    }

    return NextResponse.json(response.data)
  } catch (error) {
    console.error("Stats fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
