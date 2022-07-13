import { Collapse, Divider, Flex, HStack, IconButton, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import { ArrowRight, ArrowsClockwise, ChatText, CheckCircle, CopySimple, Info, PencilSimple, TrashSimple, X } from "phosphor-react"
import { Icon } from "./Icon"
import { TransactionIcon } from "./TransactionIcon"

interface TransactionProps {
  transactionType: 'deposit' | 'withdraw' | 'transference'
  title: string
}

export const Transaction = ({ transactionType, title }: TransactionProps) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Flex
        paddingX="2rem"
        paddingY="1rem"
        alignItems="center"
      >
        <HStack spacing="1rem" maxWidth="24rem" width="100%">
          <TransactionIcon type={transactionType} />
          <Text
            fontSize="1.2rem"
            fontWeight="500"
          >
            {title}
          </Text>
          <IconButton
            onClick={onToggle}
            aria-label="informações da transação"
            background="light.surfaceSecondary"
            transition="background 0.2s ease-in-out"
            _hover={{
              background: "light.surfaceSecondaryHover"
            }}
            icon={<Icon
              iconVariant={Info}
              color="brand.secondary"
              size={6}
            />
            }
          />

        </HStack>
        <HStack>
          <Icon iconVariant={ChatText} color="light.textSecondary" size={6} />
          <Icon iconVariant={ArrowsClockwise} color="light.textSecondary" size={6} />
          {transactionType === 'transference' && (
            <>
              <Text
                fontSize="1.2rem"
                fontWeight="500"
                color="light.textSecondary"
              >
                Nubank
              </Text>
              <Icon iconVariant={ArrowRight} color="light.textSecondary" size={6} />
            </>
          )}
          <Text
            fontSize="1.2rem"
            fontWeight="500"
            color="light.textSecondary"
          >
            Nubank
          </Text>
        </HStack>
        <HStack spacing="1rem" marginLeft="auto">
          <Text
            align="end"
            fontSize="1.3rem"
            fontWeight="500"
          >
            R$ 5.450,00
          </Text>
          <Icon iconVariant={CheckCircle} hover size={6} color="light.textSecondary" />
        </HStack>
        <HStack spacing="1rem" marginLeft="auto">
          <Icon iconVariant={PencilSimple} size={6} color="brand.secondary" />
          <Icon iconVariant={CopySimple} size={6} color="brand.secondary" />
          <Icon iconVariant={TrashSimple} size={6} color="brand.secondary" />
        </HStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          background="light.surfaceSecondaryHover"
          borderWidth={1}
          borderColor="light.textSecondary"
          borderRadius="0.5rem"
          marginX="2rem"
          paddingX="2rem"
          paddingY="1rem"
          gap="2rem"
        >
          <Stack
            spacing="0.8rem"
            direction="column"
            marginRight="auto"
          >
            <Flex alignItems="center">
              <TransactionIcon type={transactionType} />
              <Text fontSize="1rem" fontWeight="500" marginX="0.5rem">{title}</Text>
            </Flex>
            <Text
              fontSize="1rem"
              fontWeight="500"
            >
              R$ 5.450,00
            </Text>
            <Flex alignItems="center">
              <Icon iconVariant={CheckCircle} size={5} color="light.textSecondary" />
              <Text fontSize="0.8rem" marginRight="1rem">Não efetuado</Text>
              <Icon iconVariant={ArrowsClockwise} size={5} color="light.textSecondary" />
              <Text fontSize="0.8rem" marginRight="1rem">Fixa</Text>
            </Flex>
          </Stack>
          <Flex
            direction="column"
            gap="0.3rem"
            width="6rem"
          >
            <Text fontSize="0.8rem">Categoria</Text>
            <Divider borderColor="light.textSecondary" borderWidth="1px" />
            <Text fontSize="0.8rem">Salário</Text>
          </Flex>
          <Flex
            direction="column"
            gap="0.3rem"
            width="6rem"
          >
            <Text fontSize="0.8rem">Conta</Text>
            <Divider borderColor="light.textSecondary" borderWidth="1px" />
            <Text fontSize="0.8rem">Nubank</Text>
          </Flex>
          <Flex
            direction="column"
            gap="0.3rem"
            width="6rem"
          >
            <Text fontSize="0.8rem">Data</Text>
            <Divider borderColor="light.textSecondary" borderWidth="1px" />
            <Text fontSize="0.8rem">13/07/2022</Text>
          </Flex>
          <Flex
            direction="column"
            gap="0.3rem"
            width="100%"
            maxWidth="16rem"
          >
            <Text fontSize="0.8rem">Observações</Text>
            <Divider borderColor="light.textSecondary" borderWidth="1px" />
            <Text fontSize="0.8rem" noOfLines={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sit dui interdum ullamcorper nunc lacinia. Duis laoreet diam pulvinar nisl, neque, gravida.</Text>
          </Flex>
          <IconButton
            onClick={onToggle}
            aria-label="Close transaction info"
            background="light.surfaceSecondaryHover"
            transition="background 0.2s ease-in-out"
            _hover={{
              background: "light.surfaceSecondary"
            }}
            icon={<Icon
              iconVariant={X}
              size={6}
            />
            }
          />
        </Flex>
      </Collapse>
    </>
  )
}
