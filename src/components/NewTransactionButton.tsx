import { Button, Text, ButtonProps as ChakraButtonProps, useDisclosure } from "@chakra-ui/react"
import { CirclesThreePlus } from "phosphor-react"
import { Icon } from "./Icon"
import { NewTransactionModal } from "./NewTransactionModal"

interface NewTransactionButtonProps extends ChakraButtonProps { }

export const NewTransactionButton = ({ ...rest }: NewTransactionButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="3.75rem"
        paddingX={6}
        background="brand.main"
        borderRadius="full"
        transition="filter 0.2s ease-in-out"
        _hover={{
          filter: "brightness(0.9)"
        }}
        {...rest}
      >
        <Text>Nova Transação</Text>
        <Icon iconVariant={CirclesThreePlus} size={8} marginLeft={4} />
      </Button>
      <NewTransactionModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
