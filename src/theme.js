import { extendTheme } from '@chakra-ui/react'

import '@fontsource/permanent-marker'

const theme = extendTheme({
  components: {
    Heading: {
      variants: {
        brand: {
          fontFamily: 'Permanent Marker',
        },
      },
    },
  },
})

export default theme
