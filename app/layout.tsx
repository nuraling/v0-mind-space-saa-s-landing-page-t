import type React from "react"
import type { Metadata } from "next"
import { Onest } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Moncol Pool - Swimming Pool Equipment & Water Treatment Solutions",
  description:
    "Premium swimming pool equipment and water treatment solutions. Less chemicals, healthier water for residential and commercial properties in Jakarta.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${onest.variable} relative antialiased`}>
          <LanguageProvider>{children}</LanguageProvider>
        </body>
      </html>
    </>
  )
}
