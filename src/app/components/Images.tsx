import Image from 'next/image'
import mountains from '../../../public/mountains.jpg'

export function ImgBG() {
  return (
    <Image
      alt="Mountains"
      src={mountains}
      quality={100}
      fill
      sizes="100vw"
      className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover"
    />
  )
}
