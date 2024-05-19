import { ComponentProps } from 'react'

export interface HeroProps {
  className: string
}

type HeroSectionProps = ComponentProps<'div'>

export function HeroSection(props: HeroSectionProps) {
  return (
    <>
      <div
        className="mx-4 mt-80 max-w-lg items-center space-x-4 rounded-xl border border-white/30 bg-white/30 p-6 shadow-lg backdrop-blur-sm sm:mx-auto"
        {...props}
      />
    </>
  )
}

type HeroParagraphProps = ComponentProps<'p'>

export function HeroParagraph(props: HeroParagraphProps) {
  return (
    <>
      <p className="text-center text-4xl font-bold text-white/80" {...props} />
    </>
  )
}

type HeroBreakProps = ComponentProps<'br'>

export function HeroBreak(props: HeroBreakProps) {
  return (
    <>
      <br {...props} />
    </>
  )
}
