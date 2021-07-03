import {
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react'

export default function Symbol(
  { symbol: { image, name, description } },
  ...rest
) {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <button>
          <Image
            src={`/svg/${image}`}
            alt={name}
            height={65}
            htmlHeight="65px"
            htmlWidth="65px"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent borderColor="gray.600" bg="gray.900" color="white">
        <PopoverArrow bg="gray.900" />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="bold" border="0">
          {name}
        </PopoverHeader>
        <PopoverBody>{description}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
