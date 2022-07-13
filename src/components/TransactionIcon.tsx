import { Box } from "@chakra-ui/react";
import { MinusCircle, PlusCircle, Swap } from "phosphor-react";
import { Icon } from "./Icon";

interface TransactionIconProps {
  type: 'deposit' | 'withdraw' | 'transference'
}

export const TransactionIcon = ({ type }: TransactionIconProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      background={
        type === "deposit" ?
          "semantic.success" :
          type === "withdraw" ?
            "semantic.error" :
            "semantic.info"
      }
      width="2rem"
      height="2rem"
      borderRadius="full"
    >
      <Icon
        iconVariant={
          type === "deposit" ?
            PlusCircle :
            type === "withdraw" ?
              MinusCircle :
              Swap
        }
        color="light.textPrimary"
        size={4}
      />
    </Box>
  )
}
