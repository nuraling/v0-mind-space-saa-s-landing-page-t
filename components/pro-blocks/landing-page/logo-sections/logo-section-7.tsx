"use client"

import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

const logosData = [
  {
    id: 1,
    src: "/logos/plataran.png",
    name: "Plataran",
    alt: "Plataran Resort Logo",
  },
  {
    id: 2,
    src: "/logos/japfa.jpg",
    name: "Japfa",
    alt: "Japfa Logo",
  },
  {
    id: 3,
    src: "/logos/four-seasons-jimbaran.jpg",
    name: "Four Seasons",
    alt: "Four Seasons Resort Bali at Jimbaran Bay Logo",
  },
  {
    id: 4,
    src: "/logos/maya-ubud.jpeg",
    name: "Maya Ubud",
    alt: "Maya Ubud Resort & Spa Logo",
  },
  {
    id: 5,
    src: "/logos/alila.png",
    name: "Alila",
    alt: "Alila Hotels Logo",
  },
  {
    id: 6,
    src: "/logos/novotel.jpg",
    name: "Novotel",
    alt: "Novotel Hotels, Suites & Resorts Logo",
  },
  {
    id: 7,
    src: "/logos/hard-rock-bali.png",
    name: "Hard Rock Cafe",
    alt: "Hard Rock Cafe Bali Logo",
  },
  {
    id: 8,
    src: "/logos/bintang-toedjoe.png",
    name: "Bintang Toedjoe",
    alt: "Bintang Toedjoe Logo",
  },
  {
    id: 9,
    src: "/logos/pakubuwono-development.jpg",
    name: "The Pakubuwono",
    alt: "The Pakubuwono Development Logo",
  },
  {
    id: 10,
    src: "/logos/grand-mansion-menteng.jpeg",
    name: "Grand Mansion",
    alt: "The Grand Mansion Menteng Logo",
  },
]

export function LogoSection10() {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary border-b pb-16 lg:pb-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline variant="ghost">{t.logoSection.title}</Tagline>
          </div>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-center gap-3">
              {[...logosData, ...logosData].map((logoItem, index) => {
                const uniqueKey = `logo-wrapper-${logoItem.id}-${index}`
                return (
                  <div
                    key={uniqueKey}
                    className="flex h-24 w-52 flex-shrink-0 items-center justify-center transition-all duration-300"
                  >
                    <Image
                      src={logoItem.src || "/placeholder.svg"}
                      alt={logoItem.alt}
                      width={180}
                      height={96}
                      className="object-contain max-h-20 w-auto"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
