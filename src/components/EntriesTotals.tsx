import { Flex, Select, Text } from "@chakra-ui/react"

export const EntriesTotals = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      position="sticky"
      bottom={0}
      paddingY="2rem"
      background="light.surfaceSecondaryHover"
      borderRadius="0.5rem 0.5rem 0 0"
    >
      <Flex alignItems="center" justifyContent="center" width="30%">
        <Text fontSize="1rem" fontWeight="500">Saldo em</Text>
        <Select
          placeholder="Nubank"
          marginLeft="1rem"
          width="fit-content"
          variant="unstyled"
          color="brand.secondary"
          fontWeight="500"
        >
          <option value="Itaú">Itaú</option>
          <option value="Modal">Modal</option>
        </Select>
        <Text
          fontSize="1.2rem"
          fontWeight="500"
          px="1rem"
          align="end"
          marginLeft="auto"
        >
          R$ 2.850,00
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" width="30%">
        <Text fontSize="1rem" fontWeight="500">Previsto</Text>
        <Text
          fontSize="1.2rem"
          fontWeight="500"
          px="1rem"
          align="end"
          marginLeft="auto"
        >
          R$ 2.850,00
        </Text>
      </Flex>
    </Flex>
  )
}
