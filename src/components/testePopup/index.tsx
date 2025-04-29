import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { EllipsisVertical } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import React from "react"

const RowActions = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-transparent border-none shadow-none w-fit hover:bg-gray-50"
                >
                    <EllipsisVertical className="h-4 w-4" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0 z-50">
                <Command>
                    {/* <CommandInput placeholder="Filtrar..." /> */}
                    <CommandList>
                        <CommandEmpty>Nenhuma ação</CommandEmpty>
                        <CommandGroup>
                            {["Visualizar", "Editar", "Arquivar"].map((item) => (
                                <CommandItem
                                    key={item}
                                    onSelect={() => {
                                        console.log("Selecionado:", item)
                                        setOpen(false)
                                    }}
                                >
                                    {item}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default RowActions