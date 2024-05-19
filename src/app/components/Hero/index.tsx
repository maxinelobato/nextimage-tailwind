import { ImgBG } from '../Images'
import {
  HeroBreak,
  HeroParagraph,
  HeroSection,
  HeroSectionBgImage,
  HeroSectionProperty,
} from './HeroComponents'

export function Hero() {
  return (
    <>
      <ImgBG />
      <HeroSectionBgImage />
      <HeroSectionProperty>
        <HeroSection>
          <HeroParagraph>
            Image Component
            <HeroBreak />
            as a Background
          </HeroParagraph>
        </HeroSection>
      </HeroSectionProperty>
    </>
  )
}
