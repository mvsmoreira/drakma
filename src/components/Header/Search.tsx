import { useRef, useState } from "react"
import { Flex, Icon, Input } from "@chakra-ui/react"
import { MagnifyingGlass } from "phosphor-react"

export const Search = () => {

    const searchInputRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState('')

    return (
        <Flex
            as="label"
            alignItems="center"
            width="29.5rem"
            height="2.75rem"
            borderWidth={2}
            borderColor="light.surfaceSecondaryHover"
            borderRadius="full"
            background="light.surfaceSecondary"
            paddingY="0.5rem"
            paddingX="1.5rem"
            marginLeft={8}
            _hover={{background: "light.surfaceSecondaryHover"}}
            transition="background 0.2s ease-in-out"
            _focusWithin={{borderColor: "brand.main", borderWidth: "2px", background: "light.surfacePrimary"}}
        >
            <Icon
              as={MagnifyingGlass}
              width={6}
              h={6}
              color="light.textSecondary"
              weight="bold"
            />
            <Input
              variant="unstyled"
              marginLeft={5}
              color="light.textPrimary"
              placeholder="Buscar na plataforma..."
              _placeholder={{color: "light.textSecondary"}}
              fontWeight="400"
              fontSize="1rem"
              ref={searchInputRef}
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            />
        </Flex>
    )
}