"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "rainy" | "sunny" | "hotpink" | "eye-protection"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "globalhearts-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage?.getItem(storageKey) as Theme) || defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark", "rainy", "sunny", "hotpink", "eye-protection")

    if (theme === "light") {
      root.classList.add("light")
    } else if (theme === "dark") {
      root.classList.add("dark")
    } else if (theme === "rainy") {
      root.classList.add("rainy")
    } else if (theme === "sunny") {
      root.classList.add("sunny")
    } else if (theme === "hotpink") {
      root.classList.add("hotpink")
    } else if (theme === "eye-protection") {
      root.classList.add("eye-protection")
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage?.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
