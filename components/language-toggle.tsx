"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-lg border bg-background p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 gap-2 px-3"
      >
        <Image src="/flags/us.svg" alt="English" width={20} height={15} className="rounded-sm" />
        <span className="text-xs font-medium">EN</span>
      </Button>
      <Button
        variant={language === "id" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("id")}
        className="h-8 gap-2 px-3"
      >
        <Image src="/flags/id.svg" alt="Indonesian" width={20} height={15} className="rounded-sm" />
        <span className="text-xs font-medium">ID</span>
      </Button>
    </div>
  )
}
