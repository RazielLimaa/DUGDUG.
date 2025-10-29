import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rotas que requerem autenticação
const protectedRoutes = ["/dashboard", "/perfil", "/afiliado"]

// Rotas públicas que usuários autenticados normalmente não devem acessar
const authRoutes = ["/entrar", "/cadastro"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Verifica se tem refresh token (indica que o usuário está autenticado)
  const refreshToken = request.cookies.get("refresh_token")?.value
  const isAuthenticated = !!refreshToken

  console.log("[v0] Middleware - pathname:", pathname)
  console.log("[v0] Middleware - isAuthenticated:", isAuthenticated)

  // Verifica se a rota atual é protegida
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // Verifica se a rota atual é de autenticação
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // Se tentar acessar rota protegida sem estar autenticado → redireciona para login
  if (isProtectedRoute && !isAuthenticated) {
    console.log("[v0] Middleware - Redirecting to /entrar (rota protegida, usuário não autenticado)")
    const url = new URL("/entrar", request.url)
    url.searchParams.set("redirect", pathname)
    return NextResponse.redirect(url)
  }

  // Se estiver autenticado e tentar acessar rota de autenticação (ex: /entrar, /cadastro)
  if (isAuthRoute && isAuthenticated) {
    // Permite o acesso manual à página /entrar
    if (pathname === "/entrar") {
      console.log("[v0] Middleware - Usuário autenticado acessando /entrar manualmente → permitido.")
      return NextResponse.next()
    }

    // Redireciona para a home caso tente acessar /cadastro ou outras rotas de auth
    console.log("[v0] Middleware - Redirecionando usuário autenticado para /")
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Se não cair em nenhuma das condições acima, libera o acesso normalmente
  console.log("[v0] Middleware - Acesso permitido:", pathname)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths exceto as que começam com:
     * - api (rotas da API)
     * - _next/static (arquivos estáticos)
     * - _next/image (otimização de imagem)
     * - favicon.ico (ícone do site)
     * - arquivos públicos (imagens, etc)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
