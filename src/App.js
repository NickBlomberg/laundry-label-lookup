import { useState } from 'react'
import { ChakraProvider, SimpleGrid, Flex, Container } from '@chakra-ui/react'
import theme from './theme'

import Brand from './components/Brand'
import SearchInput from './components/SearchInput'
import Symbol from './components/Symbol'
import data from './data.json'

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

          <SimpleGrid columns={6} spacing={4}>
            {data.symbols.map((symbol) => {
              return <Symbol key={symbol.id} symbol={symbol} />
            })}
          </SimpleGrid>
        </Container>
      </Flex>
    </ChakraProvider>
  )
}

export default App
