import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { NotificationSystem } from "@/components/notification-system"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "GlobalHearts - Connect Across Cultures",
  description: "Find meaningful connections worldwide with multilanguage support",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <ThemeProvider defaultTheme="light" storageKey="globalhearts-ui-theme">
              {children}
              <NotificationSystem />
            </ThemeProvider>
          </LanguageProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
