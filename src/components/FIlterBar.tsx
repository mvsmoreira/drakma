import { Flex, Icon, Text } from "@chakra-ui/react"
import { FunnelSimple, MagnifyingGlass } from "phosphor-react"

export const FilterBar = () => {
  return (
    <Flex
      alignItems="center"
      width="68.875rem"
      marginLeft="auto"
      height="2.75rem"
      borderWidth={2}
      borderColor="light.surfaceSecondaryHover"
      borderRadius="full"
      background="light.surfaceSecondary"
      paddingY="0.5rem"
      paddingX="1.5rem"
      _hover={{ background: "light.surfaceSecondaryHover" }}
      transition="background 0.2s ease-in-out"
      _focusWithin={{ borderColor: "brand.main", borderWidth: "2px", background: "light.surfacePrimary" }}
    >
      <Icon
        as={FunnelSimple}
        width={6}
        h={6}
        color="light.textSecondary"
        weight="bold"
      />
      <Text
      fontSize="1rem"
      fontWeight="500"
      paddingX={4}
      >
        Filtrar por...
      </Text>
      <Icon
        as={MagnifyingGlass}
        width={6}
        h={6}
        color="light.textSecondary"
        weight="bold"
        marginLeft="auto"
      />
    </Flex>
  )
}
