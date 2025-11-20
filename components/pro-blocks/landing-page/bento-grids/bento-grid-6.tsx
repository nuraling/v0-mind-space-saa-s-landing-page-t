"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { useLanguage } from "@/contexts/language-context"

export function BentoGrid6() {
  const { t } = useLanguage()

  return (
    <section className="bg-background section-padding-y border-b" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>{t.services.tagline}</Tagline>
          <h2 className="heading-lg">{t.services.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Swimming Pool */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/modern-swimming-pool-with-blue-water-and-tiles.jpg"
              alt="Swimming Pool"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <Image
              src="/modern-swimming-pool-with-blue-water.jpg"
              alt="Swimming Pool"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">{t.services.swimmingPool.title}</h3>
              <p className="text-muted-foreground">{t.services.swimmingPool.description}</p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Natural Pond */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/natural-pond-with-plants-and-clear-water.jpg"
              alt="Natural Pond"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">{t.services.naturalPond.title}</h3>
              <p className="text-muted-foreground">{t.services.naturalPond.description}</p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Water Treatment */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/water-treatment-filtration-system-equipment.jpg"
              alt="Water Treatment"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">{t.services.waterTreatment.title}</h3>
              <p className="text-muted-foreground">{t.services.waterTreatment.description}</p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Irrigation Sprinkler */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/irrigation-sprinkler-system-watering-green-lawn.jpg"
              alt="Irrigation Sprinkler"
              width={813}
              height={332}
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <Image
              src="/irrigation-sprinkler-system-on-lawn.jpg"
              alt="Irrigation Sprinkler"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">{t.services.irrigation.title}</h3>
              <p className="text-muted-foreground">{t.services.irrigation.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
