import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2"
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7"
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1"
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6"
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9"
import { PortfolioSection1 } from "@/components/pro-blocks/landing-page/portfolio-sections/portfolio-section-1"
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="Moncol Pool transformed our resort's water quality. The reduction in chemicals has been remarkable, and our guests love the crystal-clear, healthier water."
        authorName="Resort Manager"
        authorRole="Four Seasons Jimbaran"
        avatarSrc="/professional-resort-manager.jpg"
      />
      <BentoGrid6 />
      <FeatureSection9 />
      <TestimonialsSection1
        quote="The water treatment system from Moncol Pool has significantly improved our production efficiency while meeting all safety standards for our beverage manufacturing."
        authorName="Operations Director"
        authorRole="Japfa Group"
        avatarSrc="/professional-operations-director.jpg"
      />
      <PortfolioSection1 />
      <FaqSection2 />
      <Footer1 />
    </main>
  )
}
