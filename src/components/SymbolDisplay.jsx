import { SimpleGrid } from '@chakra-ui/react'
import Symbol from './Symbol'

export default function SymbolDisplay({ symbols }) {
  return (
    <SimpleGrid columns={6} spacing={4}>
      {symbols.map((symbol) => {
        return <Symbol key={symbol.id} symbol={symbol} />
      })}
    </SimpleGrid>
  )
}
