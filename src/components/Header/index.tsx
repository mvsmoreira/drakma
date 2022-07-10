import { Flex } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { Profile } from "./Profile"
import { Search } from "./Search"
import { WidgetBar } from "./Widgetbar"

export const Header = () => {
    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            marginX="auto"
            paddingY="0.75rem"
            marginTop="1rem"
            height="4.5rem"
            alignItems="center"
        >
            <Logo />
            <Search />
            <WidgetBar />
            <Profile />
        </Flex>
    )
}