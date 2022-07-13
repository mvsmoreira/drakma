import { Flex } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"

const Entries = () => {
  return (
    <Flex direction="column" marginBottom="2rem">
      <Header />
      <Flex w="100%" marginY={8} maxWidth={1480} marginX="auto" alignItems="flex-start">
        <Sidebar />
      </Flex>
    </Flex>
  )
}

export default Entries
