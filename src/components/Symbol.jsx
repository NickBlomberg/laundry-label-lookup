import { Image } from '@chakra-ui/react'

export default function Symbol({ symbol: { image, name } }) {
  return <Image src={`/svg/${image}`} alt={name} height={65} />
}
