import { ChakraProvider, Flex, Heading } from '@chakra-ui/react'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        height="100vh"
      >
        <Heading as="h1" variant="brand">
          Laundry Label Lookup
        </Heading>
      </Flex>
    </ChakraProvider>
  )
}

export default App
