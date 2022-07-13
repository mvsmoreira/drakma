import { Flex, Text } from "@chakra-ui/react"
import { CaretLeft, CaretRight } from "phosphor-react"
import { EntriesTotals } from "../components/EntriesTotals"
import { FilterBar } from "../components/FIlterBar"
import { Header } from "../components/Header"
import { Icon } from "../components/Icon"
import { NewTransactionButton } from "../components/NewTransactionButton"
import { Sidebar } from "../components/Sidebar"
import { Transaction } from "../components/Transaction"

const Entries = () => {
  return (
    <Flex direction="column" marginBottom="2rem">
      <Header />
      <Flex w="100%" marginY={8} maxWidth={1480} marginX="auto" alignItems="flex-start">
        <Sidebar />
        <Flex as="section" direction="column" marginLeft="auto" width="calc(100% - 252px)">
          <FilterBar />
          <Flex
            direction="column"
            borderWidth={2}
            borderColor="light.surfaceSecondaryHover"
            borderRadius="0.5rem"
            background="light.surfaceSecondary"
            paddingTop="2rem"
            marginY="2rem"
            width="68.875rem"
            marginLeft="auto"
          >
            <Flex
              marginX="2rem"
            >
              <NewTransactionButton />
              <Flex
                alignItems="center"
                marginLeft="15rem"
              >
                <Icon iconVariant={CaretLeft} hover size={6} />
                <Text
                  fontSize="1.5rem"
                  marginX={6}
                  fontWeight="500"
                >
                  Julho 2022
                </Text>
                <Icon iconVariant={CaretRight} hover size={6} />
              </Flex>
            </Flex>
            <Flex
              direction="column"
              marginY="2rem"
            >
              <Transaction transactionType="deposit" title="Salário" />
              <Transaction transactionType="withdraw" title="Aluguel" />
              <Transaction transactionType="transference" title="Transferência" />
            </Flex>
            <EntriesTotals />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Entries
