"use client"

import { Logo } from "@/components/pro-blocks/logo"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"

export function Footer1() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background section-padding-y" role="contentinfo" aria-label="Site footer">
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Main Navigation */}
          <nav className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8" aria-label="Footer navigation">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.home}
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.features}
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.howItWorks}
            </Link>
            <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.portfolio}
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.faq}
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left">© 2025 Moncol Pool. {t.footer.copyright}</p>

          {/* Legal Navigation */}
          <nav className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8" aria-label="Legal links">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.termsOfService}
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.cookiesSettings}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
