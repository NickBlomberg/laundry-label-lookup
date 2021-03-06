import { Input } from '@chakra-ui/react'

export default function SearchInput({ query, setQuery, ...rest }) {
  const handleChange = (event) => setQuery(event.target.value)

  return (
    <Input
      placeholder="Search"
      size="lg"
      value={query}
      onChange={handleChange}
      {...rest}
    />
  )
}
