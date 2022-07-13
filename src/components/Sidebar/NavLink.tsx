import Link from "next/link"
import { Flex, Link as ChakraLink, Text, LinkProps as ChakraLinkProps, Select } from "@chakra-ui/react"
import { ElementType, ReactNode } from "react"
import { Icon } from "../Icon"
import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType,
    children: ReactNode,
    href: string
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink
              display="flex"
              alignItems="center"
              borderRadius={4}
              padding={2}
              _hover={{
                background: "light.surfaceSecondaryHover"
              }}
              {...rest}
            >
                <Icon iconVariant={icon} />
                <Text
                    color="light.textPrimary"
                    fontSize="1rem"
                    fontWeight="500"
                    paddingX={2}
                >
                    {children}
                </Text>
            </ChakraLink>
        </ActiveLink>
    )
}
