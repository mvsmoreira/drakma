import { Divider, Flex, Stack, Text } from "@chakra-ui/react"
import { Info } from "phosphor-react"
import { ReactElement } from "react"
import { Icon } from "./Icon"

interface MainCardProps {
  title: string,
  amount: number,
  chart?: ReactElement
  sideTotals?: boolean
}

export const MainCard = ({ title, amount, chart, sideTotals }: MainCardProps) => {
  return (
    <Flex
      direction="column"
      background="light.surfaceSecondary"
      borderColor="light.surfaceSecondaryHover"
      borderWidth="1px"
      borderRadius={8}
      padding="1rem"
    >
      <Flex
        justifyContent="space-between"
      >
        <Stack
          spacing={1}
          >
          <Text
          fontSize="1.3rem"
          fontWeight="500"
          >
            {title}
          </Text>
          <Text
          fontSize="2rem"
          fontWeight="500"
          >
            {amount}
          </Text>
          <Text
          fontSize="0.8rem"
          fontWeight="400"
          color="light.textSecondary"
          >
            Total
          </Text>
        </Stack>
        <Icon iconVariant={Info} hover color="light.textSecondary" size={6} />
      </Flex>
      <Divider marginY="1rem" borderWidth="1px" borderColor="light.surfaceSecondaryHover" />
      <Flex
      minHeight="224px"
      justifyContent="flex-end"
      >
        {chart}
        {sideTotals && (
          <Flex
          direction="column"
          width="60%"
          marginLeft="1rem"
          paddingX="1rem"
          alignItems="flex-end"
          >
            <Text fontWeight="500" fontSize="1.5rem" color="semantic.success" marginY="0.5rem">R$ 3.541,00</Text>
            <Text fontWeight="500" fontSize="1.5rem" color="semantic.error" marginY="0.5rem">R$ 1.250,00</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
