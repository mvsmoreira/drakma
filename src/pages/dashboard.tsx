import { Button, Flex, HStack, Text } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Icon } from "../components/Icon"
import { CaretLeft, CaretRight, CirclesThreePlus } from "phosphor-react"

const Dashboard = () => {
    return (
        <Flex direction="column" height="100vh">
            <Header />
            <Flex w="100%" marginY={8} maxWidth={1480} marginX="auto" alignItems="flex-start">
                <Sidebar />
                <Flex as="main" direction="column" marginLeft={8} width="100%">
                    <Flex justifyContent="space-between" alignItems="center" width="69rem">
                        <Text
                            fontSize="1.25rem"
                            fontWeight="400"
                        >
                            Bom dia, Vinicius
                        </Text>
                        <Flex alignItems="center">
                            <Icon icon={CaretLeft} hover size={6}/>
                            <Text
                                fontSize="1.5rem"
                                marginX={6}
                                fontWeight="500"
                            >
                                Julho
                            </Text>
                            <Icon icon={CaretRight} hover size={6} />
                        </Flex>
                        <Button
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            width="3.75rem"
                            height="3.75rem"
                            padding={0}
                            background="brand.main"
                            borderRadius="full"
                        >
                            <Icon icon={CirclesThreePlus} size={8}/>
                        </Button>
                    </Flex>
                    
                </Flex>

            </Flex>
        </Flex>
    )
}

export default Dashboard