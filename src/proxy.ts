import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'es']
let defaultLocale = 'en'

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  // Check if there is any supported locale in the Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(',').map(l => l.split(';')[0].trim().substring(0, 2))
    for (const locale of preferredLocales) {
      if (locales.includes(locale)) {
        return locale
      }
    }
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  // Exclude static files and api routes from redirection
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/images') ||
    pathname.endsWith('.ico') || 
    pathname.endsWith('.svg') || 
    pathname.endsWith('.png') || 
    pathname.endsWith('.jpg')
  ) {
    return
  }

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|images|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
