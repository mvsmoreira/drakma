import { Link as ChakraLink, MenuItem } from "@chakra-ui/react"
import { ActiveLink } from "../ActiveLink"

interface NavMenuOptionProps {
    value: string
    href: string
}

export const NavMenuOption = ({ value, href }: NavMenuOptionProps) => {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink textDecoration="none" >
                <MenuItem
                    color="light.textPrimary"
                    fontSize="1rem"
                    fontWeight="500"
                    _hover={{
                        background: "light.surfaceSecondaryHover"
                    }}
                >
                    {value}
                </MenuItem>
            </ChakraLink>
        </ActiveLink>
    )
}