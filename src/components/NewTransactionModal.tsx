import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Flex,
  NumberInput,
  NumberInputField,
  Select,
  Textarea,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react'
import { TransactionIcon } from './TransactionIcon'

interface NewTransactionModalProps {
  isOpen: boolean
  onClose: () => void
}

export const NewTransactionModal = ({ isOpen, onClose }: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent
        background="light.surfaceSecondary"
        paddingY="2rem"
        paddingX="1.5rem"
      >
        <ModalHeader>
          <ModalCloseButton />
          <Flex>
            <Text marginRight="auto">Nova transação</Text>
            <HStack spacing="1rem">
              <TransactionIcon type='deposit' />
              <TransactionIcon type='withdraw' />
              <TransactionIcon type='transference' />
            </HStack>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor='title'>Título</FormLabel>
            <Input id='title' type='text' background="light.surfacePrimary" required />
            <SimpleGrid columns={2} columnGap="2rem" marginTop="2rem">
              <Flex direction="column">
                <FormLabel htmlFor='amount'>Valor</FormLabel>
                <NumberInput>
                  <NumberInputField id='amount' background="light.surfacePrimary" />
                </NumberInput>
              </Flex>
              <Flex direction="column">
                <FormLabel htmlFor='date'>Data</FormLabel>
                <Input id='date' type='date' background="light.surfacePrimary" />
              </Flex>
            </SimpleGrid>
            <SimpleGrid columns={2} columnGap="2rem" marginTop="2rem">
              <Flex direction="column">
                <FormLabel htmlFor='amount'>Conta ou cartão</FormLabel>
                <Select placeholder='Selecione a conta'>
                  <option value="Nubank">Nubank</option>
                  <option value="Itaú">Itaú</option>
                  <option value="Modal">Modal</option>
                </Select>
              </Flex>
              <Flex direction="column">
                <FormLabel htmlFor='date'>Categoria</FormLabel>
                <Select>
                  <option value="Nubank">Alimentação</option>
                  <option value="Itaú">Lazer</option>
                  <option value="Modal">Aluguel</option>
                </Select>
              </Flex>
            </SimpleGrid>
            <FormLabel htmlFor='date' marginTop="2rem">Observações</FormLabel>
            <Textarea />
            <Flex justifyContent="flex-end" marginTop="2rem">
              <Button
                background="light.textSecondary"
                color="light.surfacePrimary"
                marginRight={3}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                type='submit'
                background="brand.main"
                color="light.textPrimary"
              >
                Salvar
              </Button>
            </Flex>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
