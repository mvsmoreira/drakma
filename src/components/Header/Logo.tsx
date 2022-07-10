import { Image } from "@chakra-ui/react"
import Link from "next/link"
import { Link as ChakraLink } from "@chakra-ui/react"

export const Logo = () => {
    return (
        <Link href="/dashboard" passHref>
            <ChakraLink alignItems="center" paddingY="0.25rem" marginRight="5.75rem">
                <Image src="/images/logo-light.svg" alt="Drakma logo" />
            </ChakraLink>
        </Link>
    )
}