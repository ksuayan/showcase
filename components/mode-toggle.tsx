"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/language-context"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Only render the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t.common.toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t.common.toggleTheme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? "bg-accent" : ""}>
          {t.common.lightMode}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? "bg-accent" : ""}>
          {t.common.darkMode}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? "bg-accent" : ""}>
          {t.common.systemMode}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
