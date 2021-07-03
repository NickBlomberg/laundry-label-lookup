import { SimpleGrid } from '@chakra-ui/react'
import Symbol from './Symbol'

export default function SymbolDisplay({ symbols, ...rest }) {
  return (
    <SimpleGrid
      columns={{ base: 4, md: 6 }}
      spacing={{ base: '1', md: '4' }}
      {...rest}
    >
      {symbols.map((symbol) => {
        return <Symbol key={symbol.id} symbol={symbol} />
      })}
    </SimpleGrid>
  )
}
