import { ComponentProps } from 'react'

export interface HeroProps {
  className: string
}

type HeroSectionBgImageProps = ComponentProps<'div'>

export function HeroSectionBgImage(props: HeroSectionBgImageProps) {
  return (
    <div
      className="absolute h-full w-full bg-gradient-to-r from-cyan-950/90 from-40% to-sky-950/45 to-90%"
      {...props}
    />
  )
}

type HeroSectionPropertyProps = ComponentProps<'div'>

export function HeroSectionProperty(props: HeroSectionPropertyProps) {
  return (
    <>
      <div className="p-6 md:p-12 lg:px-60 lg:py-60" {...props} />
    </>
  )
}

type HeroSectionProps = ComponentProps<'div'>

export function HeroSection(props: HeroSectionProps) {
  return (
    <>
      <div
        className="mx-4 max-w-lg space-x-4 rounded-xl border border-white/5 bg-white/10 p-6 shadow-sm backdrop-blur-sm sm:mx-auto"
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
