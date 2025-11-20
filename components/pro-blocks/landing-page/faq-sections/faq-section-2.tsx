"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { useLanguage } from "@/contexts/language-context"

export function FaqSection2() {
  const { t } = useLanguage()

  return (
    <section className="bg-background section-padding-y border-b" aria-labelledby="faq-heading" id="faq">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>{t.faq.tagline}</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              {t.faq.title}
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              {t.faq.subtitle}{" "}
              <Link href="https://wa.me/6281234567890" className="text-primary underline">
                {t.faq.contact}
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">{t.faq.general}</h2>
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible aria-label="General FAQ items">
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">{t.faq.questions.q1.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q1.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">{t.faq.questions.q2.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q2.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">{t.faq.questions.q3.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">{t.faq.questions.q3.answer.split(":")[0]}:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bayern AOP Ozone</li>
                      <li>Ionizer</li>
                      <li>UV Sterilizer</li>
                      <li>{t.language === "id" ? "Bergaransi 1 tahun" : "1 year warranty"}</li>
                    </ul>
                    <p className="mt-3">{t.faq.questions.q3.answer.split(". ").slice(1).join(". ")}</p>
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">{t.faq.questions.q4.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q4.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 5 */}
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">{t.faq.questions.q5.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q5.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">{t.faq.technical}</h2>
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible aria-label="Technical FAQ items">
                {/* FAQ Item 1 */}
                <AccordionItem value="tech-1">
                  <AccordionTrigger className="text-left">{t.faq.questions.q6.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q6.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="tech-2">
                  <AccordionTrigger className="text-left">{t.faq.questions.q7.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q7.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="tech-3">
                  <AccordionTrigger className="text-left">{t.faq.questions.q8.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q8.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="tech-4">
                  <AccordionTrigger className="text-left">{t.faq.questions.q9.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q9.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 5 */}
                <AccordionItem value="tech-5">
                  <AccordionTrigger className="text-left">{t.faq.questions.q10.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q10.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 6 */}
                <AccordionItem value="tech-6">
                  <AccordionTrigger className="text-left">{t.faq.questions.q11.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q11.answer}</AccordionContent>
                </AccordionItem>

                {/* FAQ Item 7 */}
                <AccordionItem value="tech-7">
                  <AccordionTrigger className="text-left">{t.faq.questions.q12.question}</AccordionTrigger>
                  <AccordionContent>{t.faq.questions.q12.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
