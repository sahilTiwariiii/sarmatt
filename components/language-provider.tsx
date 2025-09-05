"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es" | "fr" | "de" | "it" | "pt" | "ru" | "zh" | "ja" | "ko" | "ar" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translate: (key: string) => string
  isRTL: boolean
}

const translations = {
  en: {
    welcome: "Welcome to GlobalHearts",
    findMatch: "Find Your Perfect Match",
    chat: "Chat",
    matches: "Matches",
    settings: "Settings",
    profile: "Profile",
    like: "Like",
    superLike: "Super Like",
    message: "Message",
    distance: "miles away",
    online: "Online",
    offline: "Offline",
  },
  es: {
    welcome: "Bienvenido a GlobalHearts",
    findMatch: "Encuentra tu Pareja Perfecta",
    chat: "Chat",
    matches: "Coincidencias",
    settings: "Configuración",
    profile: "Perfil",
    like: "Me Gusta",
    superLike: "Super Me Gusta",
    message: "Mensaje",
    distance: "millas de distancia",
    online: "En línea",
    offline: "Desconectado",
  },
  fr: {
    welcome: "Bienvenue sur GlobalHearts",
    findMatch: "Trouvez Votre Partenaire Parfait",
    chat: "Chat",
    matches: "Correspondances",
    settings: "Paramètres",
    profile: "Profil",
    like: "J'aime",
    superLike: "Super J'aime",
    message: "Message",
    distance: "miles de distance",
    online: "En ligne",
    offline: "Hors ligne",
  },
  ar: {
    welcome: "مرحباً بك في GlobalHearts",
    findMatch: "اعثر على شريك حياتك المثالي",
    chat: "محادثة",
    matches: "المطابقات",
    settings: "الإعدادات",
    profile: "الملف الشخصي",
    like: "إعجاب",
    superLike: "إعجاب فائق",
    message: "رسالة",
    distance: "ميل بعيداً",
    online: "متصل",
    offline: "غير متصل",
  },
  // Add more languages as needed
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const translate = (key: string): string => {
    const langTranslations = translations[language] || translations.en
    return langTranslations[key as keyof typeof langTranslations] || key
  }

  const isRTL = language === "ar" || language === "he"

  useEffect(() => {
    // Apply RTL direction to document
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language, isRTL])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate, isRTL }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
