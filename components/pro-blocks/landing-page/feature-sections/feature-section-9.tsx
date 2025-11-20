"use client"

import { Droplets, Leaf, Shield, Wrench } from "lucide-react"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { useLanguage } from "@/contexts/language-context"

export function FeatureSection9() {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary section-padding-y border-b" id="how-it-works">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>{t.features.tagline}</Tagline>
          <h2 className="heading-lg text-foreground">{t.features.title}</h2>
          <p className="text-muted-foreground text-base">{t.features.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Droplets className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">{t.features.lessChemicals.title}</h3>
              <p className="text-muted-foreground">{t.features.lessChemicals.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Leaf className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">{t.features.ecoFriendly.title}</h3>
              <p className="text-muted-foreground">{t.features.ecoFriendly.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Shield className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">{t.features.trustedQuality.title}</h3>
              <p className="text-muted-foreground">{t.features.trustedQuality.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Wrench className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">{t.features.expertService.title}</h3>
              <p className="text-muted-foreground">{t.features.expertService.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
