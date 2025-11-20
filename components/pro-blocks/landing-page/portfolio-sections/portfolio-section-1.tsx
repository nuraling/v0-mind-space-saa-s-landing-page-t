"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function PortfolioSection1() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const projects = [
    {
      title: t.portfolio.projects.lowChlorineJakarta.title,
      category: t.portfolio.projects.lowChlorineJakarta.category,
      description: t.portfolio.projects.lowChlorineJakarta.description,
      image: "/projects/low-chlorine-pool-jakarta.avif",
    },
    {
      title: t.portfolio.projects.naturalEastJava.title,
      category: t.portfolio.projects.naturalEastJava.category,
      description: t.portfolio.projects.naturalEastJava.description,
      image: "/projects/natural-pool-east-java.avif",
    },
    {
      title: t.portfolio.projects.lowChlorineBali.title,
      category: t.portfolio.projects.lowChlorineBali.category,
      description: t.portfolio.projects.lowChlorineBali.description,
      image: "/projects/low-chlorine-pool-bali.avif",
    },
    {
      title: t.portfolio.projects.lowChlorineBogor.title,
      category: t.portfolio.projects.lowChlorineBogor.category,
      description: t.portfolio.projects.lowChlorineBogor.description,
      image: "/projects/low-chlorine-pool-bogor.avif",
    },
    {
      title: t.portfolio.projects.lowChlorineBali2.title,
      category: t.portfolio.projects.lowChlorineBali2.category,
      description: t.portfolio.projects.lowChlorineBali2.description,
      image: "/projects/low-chlorine-pool-bali-2.avif",
    },
    {
      title: t.portfolio.projects.lowChlorineBogor2.title,
      category: t.portfolio.projects.lowChlorineBogor2.category,
      description: t.portfolio.projects.lowChlorineBogor2.description,
      image: "/projects/low-chlorine-pool-bogor-2.avif",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="portfolio-section-title"
      id="portfolio"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col">
            <Tagline>{t.portfolio.tagline}</Tagline>
            <h2 id="portfolio-section-title" className="heading-lg text-foreground">
              {t.portfolio.title}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">{t.portfolio.subtitle}</p>
          </div>

          {/* Scrollable Portfolio Grid */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute -top-16 right-0 z-10 flex gap-2">
              <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll left">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll right">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {projects.map((project, index) => (
                <Card key={index} className="flex-shrink-0 w-[320px] md:w-[380px] overflow-hidden">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-primary text-sm font-medium">{project.category}</p>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
