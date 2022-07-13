import { Menu, MenuButton, MenuList, Button, Box } from "@chakra-ui/react"
import { ElementType, ReactNode } from "react"
import { CaretRight } from "phosphor-react"
import { Icon } from "../Icon"

interface NavMenuProps {
    placeholder?: string
    children: ReactNode
    icon: ElementType
}

export const NavMenu = ({ placeholder, children, icon }: NavMenuProps) => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                variant="unstyled"
                alignItems="center"
                justifyContent="flex-start"
                borderRadius={4}
                padding={2}
                _hover={{
                    background: "light.surfaceSecondaryHover"
                }}
                cursor="pointer"
                display="flex"
                marginLeft={2}
                color="light.textPrimary"
                fontSize="1rem"
                fontWeight="500"
                leftIcon={<Icon iconVariant={icon} />}
                rightIcon={<Icon iconVariant={CaretRight} />}
            >
                <Box flex="start">{placeholder}</Box>
            </MenuButton>
            <MenuList
                background="light.surfaceSecondary"
                borderRadius={6}
                borderWidth="1px"
                borderColor="light.surfaceSecondaryHover"
            >
                {children}
            </MenuList>
        </Menu>
    )
}
