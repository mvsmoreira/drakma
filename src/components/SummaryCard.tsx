import { Box, Flex, Text } from "@chakra-ui/react"
import { ElementType } from "react"
import { Icon } from "./Icon"
import { TrendUp } from "phosphor-react"
import { SummaryCardChart } from "./Charts/SummaryCardChart"


interface SummaryCardProps {
  icon: ElementType,
  title: string
}

export const SummaryCard = ({ icon, title }: SummaryCardProps) => {
  return (
    <Flex
      background="light.surfaceSecondary"
      borderColor="light.surfaceSecondaryHover"
      borderWidth="1px"
      borderRadius={8}
      minHeight="8.75rem"
      padding="1rem"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        direction="column"
        minWidth="10rem"
      >
        <Text
          fontSize="1rem"
          fontWeight="500"
          marginBottom="1rem"
        >
          {title}
        </Text>
        <SummaryCardChart />
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="flex-end"
        flex="1"
        marginLeft="1rem"
      >
        <Icon iconVariant={icon} size={6} hover color="light.textSecondary" />
        <Box as="span"
          display="flex"
          alignItems="baseline"
          fontWeight="700"
        >
          <Text
            fontSize="1rem"
            paddingRight="0.3rem"
          >
            R$
          </Text>
          <Box
            as="span"
            fontWeight="700"
            fontSize="1.3rem"
            textAlign="right"
          >
            2.500,00
          </Box>
        </Box>
        <Flex>
          <Box
          display="flex"
          alignItems="baseline"
          fontSize="1.2rem"
          color="light.textSecondary"
          paddingX="0.5rem"
          >
            + 0,7%
          </Box>
          <Icon iconVariant={TrendUp} size={6} fontWeight="bold" color="semantic.success" />
        </Flex>
      </Flex>

    </Flex>
  )
}
