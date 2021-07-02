import { useState } from 'react'
import {
  ChakraProvider,
  Flex,
  Container,
  Heading,
  Input,
} from '@chakra-ui/react'
import theme from './theme'

function App() {
  const [query, setQuery] = useState('')

  const handleChange = (event) => setQuery(event.target.value)

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
        <Container>
          <Input
            placeholder="Search"
            size="lg"
            value={query}
            onChange={handleChange}
          />
        </Container>
      </Flex>
    </ChakraProvider>
  )
}

export default App
