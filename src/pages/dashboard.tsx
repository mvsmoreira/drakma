import { Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Icon } from "../components/Icon"
import { CaretLeft, CaretRight, EyeSlash, MinusCircle, PlusCircle } from "phosphor-react"
import { SummaryCard } from "../components/SummaryCard"
import { MainCard } from "../components/MainCard"
import { BalanceChart } from "../components/Charts/BalanceChart"
import { ExpensesByCategoryChart } from "../components/Charts/ExpensesByCategoryChart"
import { AnnualProjectionChart } from "../components/Charts/AnnualProjectionChart"
import { NewTransactionButton } from "../components/NewTransactionButton"

const Dashboard = () => {
  return (
    <Flex direction="column" marginBottom="2rem">
      <Header />
      <Flex w="100%" marginY={8} maxWidth={1480} marginX="auto" alignItems="flex-start">
        <Sidebar />
        <Flex as="main" direction="column" marginLeft="auto" width="calc(100% - 252px)">
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              fontSize="1.25rem"
              fontWeight="500"
            >
              Bom dia, Vinicius
            </Text>
            <Flex alignItems="center">
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
            <NewTransactionButton />
          </Flex>
          <SimpleGrid minChildWidth="346px" spacing="2rem" marginTop="2rem">
            <SummaryCard icon={EyeSlash} title="Saldo geral" />
            <SummaryCard icon={PlusCircle} title="Receitas" />
            <SummaryCard icon={MinusCircle} title="Despesas" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing="2rem" marginTop="2rem">
            <MainCard title="Balanço mensal" sideTotals amount={5450.00} chart={<BalanceChart />} />
            <MainCard title="Gastos por categoria" amount={5450.00} chart={<ExpensesByCategoryChart />} />
            <MainCard title="Projeção anual" amount={25450} chart={<AnnualProjectionChart />} />
          </SimpleGrid>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default Dashboard
