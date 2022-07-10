import { Stack } from "@chakra-ui/react"
import { NavLink } from "./NavLink"
import { GearSix, House, Receipt } from "phosphor-react"
import { NavMenuOption } from "./NavMenuOption"
import { NavMenu } from "./NavMenu"

export const Navbar = () => {
    return (
        <Stack as="nav" spacing={6} width="220px">
            <NavLink children="Dashboard" href="/dashboard" icon={House} />
            <NavMenu icon={Receipt} placeholder="Cadastros">
                <NavMenuOption href="/lancamentos" value="Lançamentos" />
                <NavMenuOption href="/lancamentos" value="Relatórios" />
            </NavMenu>
            <NavMenu icon={GearSix} placeholder="Configurações">
                <NavMenuOption href="#" value="Perfil" />
            </NavMenu>
        </Stack>
    )
}