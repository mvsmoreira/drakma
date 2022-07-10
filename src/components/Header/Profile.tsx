import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export const Profile = () => {
    return (
        <Flex align="center" marginLeft={8}>
            <Box mr="4" textAlign="right">
                <Text color="light.textPrimary">Vinicius Moreira</Text>
                <Text color="light.textSecondary" fontSize="small">
                    mvs.moreira93@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Vinicius Moreira" src="https://github.com/mvsmoreira.png" />
        </Flex>
    )
}