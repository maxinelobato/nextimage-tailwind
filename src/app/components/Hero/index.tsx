import { ImgBG } from '../Images'
import { HeroBreak, HeroParagraph, HeroSection } from './HeroComponents'

export function Hero() {
  return (
    <>
      <ImgBG />
      <HeroSection>
        <HeroParagraph>
          Image Component
          <HeroBreak />
          as a Background
        </HeroParagraph>
      </HeroSection>
    </>
  )
}
