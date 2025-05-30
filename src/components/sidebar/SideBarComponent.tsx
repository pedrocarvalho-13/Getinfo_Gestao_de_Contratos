import { ChevronDown, Home, File, Building, Landmark } from "lucide-react"
import Style from "@/Styles/style.module.css"
// import DocIcon from "../../../public/doc-icon.png"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "../ui/collapsible"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
        submenu: null,
    },
    {
        title: "Empresas",
        url: "#",
        icon: Building,
        submenu: [
            { title: "Listar Empresas", url: "/empresas/listarEmpresas" },
            { title: "Cadastrar Empresas", url: "/empresas/cadastrarEmpresa" }
        ],
    },
    {
        title: "Contratos",
        url: "#",
        icon: File,
        submenu: [
            { title: "Listar Contratos", url: "/contratos/listarContratos" },
            { title: "Cadastrar Contratos", url: "/contratos/cadastrarContratos" }
        ],
    },
    {
        title: "Colaboradores",
        url: "#",
        icon: Landmark,
        submenu: [
            { title: "Listar Colaboradores", url: "/colaboradores/listarColaboradores" },
            { title: "Cadastrar Colaborador", url: "/colaboradores/cadastrarColaboradores" }
        ],
    },
]


export function AppSidebar() {
    return (
        <Sidebar className="border-none bg-gray-200">
            <SidebarHeader className="bg-gray-200">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link href={"/dashboard"}>
                            <div className={`bg-transparent h-30 ml-4 ${Style.header}`}></div>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="bg-gray-200">
                <SidebarGroup>
                    <SidebarGroupContent>

                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    {item.submenu ? (
                                        <Collapsible>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton className="hover:bg-[#72F2E5] h-[8vh]">
                                                    <div className="flex item-center justify-center w-[2vw] bg-[#72F2E5] p-1 rounded-[12px]">
                                                        <item.icon className="w-4 text-white" />
                                                    </div>
                                                    <span>{item.title}</span>
                                                    <ChevronDown className="ml-auto" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                {item.submenu.map((submenu) => (
                                                    <SidebarMenuItem key={submenu.title} className="pl-10 hover:bg-[#72F2E5] active:bg-[#76FFF1]">
                                                        <SidebarMenuButton asChild className="hover:bg-[#72F2E5] active:bg-[#76FFF1]">

                                                            <Link href={submenu.url} className="">
                                                                <span>{submenu.title}</span>
                                                            </Link>

                                                        </SidebarMenuButton>

                                                    </SidebarMenuItem>
                                                ))}
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <SidebarMenuButton asChild className="hover:bg-[#72F2E5] active:bg-[#76FFF1] h-[8vh]">
                                            <Link href={item.url}>
                                                <div className="flex item-center justify-center w-[2vw] bg-[#72F2E5] active:bg-[#76FFF1] p-1 rounded-[12px]">
                                                    <item.icon className="w-4 text-white" />
                                                </div>                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>

                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
