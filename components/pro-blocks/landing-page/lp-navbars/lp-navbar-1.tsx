"use client"

import { Logo } from "@/components/pro-blocks/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const MENU_ITEMS = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.faq, href: "#faq" },
  ] as const

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row items-center justify-end gap-3 md:flex">
          <div className="flex flex-row gap-1">
            {MENU_ITEMS.map(({ label, href }) => (
              <Link key={label} href={href}>
                <Button variant="ghost">{label}</Button>
              </Link>
            ))}
          </div>
          <LanguageToggle />
          <Link href="https://wa.me/6281234567890">
            <Button>{t.nav.tryForFree}</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-3 pb-2.5 md:hidden">
            <div className="flex flex-col gap-1">
              {MENU_ITEMS.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <Button variant="ghost" className="w-full">
                    {label}
                  </Button>
                </Link>
              ))}
            </div>
            <LanguageToggle />
            <Link href="https://wa.me/6281234567890">
              <Button className="w-full">{t.nav.tryForFree}</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
