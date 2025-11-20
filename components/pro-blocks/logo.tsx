import Image from "next/image"
import type React from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Image
      src="/moncol-pool-logo.png"
      alt="Moncol Pool"
      width={120}
      height={120}
      className={className || "w-[100px] h-[100px] md:w-[120px] md:h-[120px]"}
    />
  )
}
