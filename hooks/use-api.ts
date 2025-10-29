"use client"

import { useState, useCallback } from "react"
import apiClientWithInterceptor from "../lib/api"

export function useApi() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const callApi = useCallback(async <T,>(apiCall: () => Promise<any>): Promise<T | null> => {
    setLoading(true)
    setError(null)

    try {
      const response = await apiCall()

      if (response.error) {
        setError(response.error)
        return null
      }

      return response.data as T
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erro desconhecido"
      setError(errorMessage)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    callApi,
    api: apiClientWithInterceptor,
  }
}
