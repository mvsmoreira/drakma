import { HStack } from "@chakra-ui/react"
import { Notification, Moon } from "phosphor-react"
import { Icon } from "../Icon"

export const WidgetBar = () => {
    return (
        <HStack
            spacing={5}
            marginLeft="auto"
            borderRightWidth={2}
            borderColor="light.textSecondary"
            paddingX={8}
            height={8}
        >
            <Icon icon={Notification} hover />
            <Icon icon={Moon} hover />
        </HStack>
    )
}