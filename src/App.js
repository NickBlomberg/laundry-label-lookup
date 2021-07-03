import { useState, useEffect } from 'react'
import { ChakraProvider, VStack, Container } from '@chakra-ui/react'
import theme from './theme'

import Brand from './components/Brand'
import SearchInput from './components/SearchInput'
import SymbolDisplay from './components/SymbolDisplay'
import data from './data.json'

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query === '') {
      setResults(data.symbols)
      return
    }

    setResults(
      data.symbols.filter(
        (symbol) =>
          symbol.name.toLowerCase().indexOf(query) > 0 ||
          symbol.description.toLowerCase().indexOf(query) > 0,
      ),
    )
  }, [query])

  return (
    <ChakraProvider theme={theme}>
      <VStack
        as="main"
        spacing={{ base: 5, md: 10 }}
        align="center"
        height="100vh"
        mt={{ base: 4, md: 20 }}
      >
        <Brand />
        <Container>
          <SearchInput query={query} setQuery={setQuery} />
          <SymbolDisplay symbols={results} mt={{ base: 5, md: 8 }} />
        </Container>
      </VStack>
    </ChakraProvider>
  )
}

export default App
