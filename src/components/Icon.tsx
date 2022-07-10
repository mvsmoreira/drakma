import { Flex, Icon as ChakraIcon } from "@chakra-ui/react"
import { ElementType } from "react"

interface IconProps {
    icon: ElementType
    hover?: boolean
    size?: number
}

export const Icon = ({ icon, hover, size }: IconProps) => {
    return (
        <Flex
            width={8}
            height={8}
            justifyContent="center"
            alignItems="center"
            borderRadius={4}
            transition="background 0.2s ease-in-out"
            _hover={hover && ({
                background: "light.surfaceSecondaryHover",
                cursor: "pointer",
            }
            )}
        >
            <ChakraIcon
                as={icon}
                width={size ? size : 5}
                h={size ? size : 5}
                color="light.textPrimary"
                weight="bold"
            />
        </Flex>
    )
}