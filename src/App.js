import { useState, useEffect } from 'react'
import { ChakraProvider, Flex, Container } from '@chakra-ui/react'
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
          <SymbolDisplay symbols={results} />
        </Container>
      </Flex>
    </ChakraProvider>
  )
}

export default App
