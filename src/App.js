import { useState } from 'react'
import {
  ChakraProvider,
  Flex,
  Container,
  Heading,
  Input,
} from '@chakra-ui/react'
import theme from './theme'

import Brand from './components/Brand'
import SearchInput from './components/SearchInput'

function App() {
  const [query, setQuery] = useState('')

  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        height="100vh"
      >
        <Brand />
        <Container>
          <SearchInput query={query} setQuery={setQuery} />
        </Container>
      </Flex>
    </ChakraProvider>
  )
}

export default App
