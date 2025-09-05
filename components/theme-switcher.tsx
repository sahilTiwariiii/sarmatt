"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Palette, Sun, Moon, Cloud, Heart, Eye } from "lucide-react"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light Theme</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark Theme</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sunny")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Sunny Theme</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("rainy")}>
          <Cloud className="mr-2 h-4 w-4" />
          <span>Rainy Theme</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("hotpink")}>
          <Heart className="mr-2 h-4 w-4" />
          <span>Hot Pink Theme</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("eye-protection")}>
          <Eye className="mr-2 h-4 w-4" />
          <span>Eye Protection</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
