import { Flex, Icon as ChakraIcon, IconProps as ChakraIconProps } from "@chakra-ui/react"
import { ElementType } from "react"

interface IconProps extends ChakraIconProps {
    iconVariant: ElementType
    hover?: boolean
    size?: number
}

export const Icon = ({ iconVariant, hover, size, ...rest }: IconProps) => {
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
                as={iconVariant}
                width={size ? size : 5}
                h={size ? size : 5}
                {...rest}
            />
        </Flex>
    )
}
