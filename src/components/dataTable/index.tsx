"use client"

// import { HeaderGroup, Row, Cell } from '@tanstack/react-table'


import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    HeaderGroup, 
    Row, 
    Cell
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
// } from "@/components/ui/command"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"

// import { Key } from "react"
// import { ChevronsUpDown, Ellipsis, EllipsisVertical, Pencil } from "lucide-react";
// import { Button } from "../ui/button"
import React from "react"
import RowActions from "../testePopup"
import Link from "next/link"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

// export const columns: ColumnDef<T>[] = [
//     {
//         accessorKey: "status",
//         header: "Status",
//     },
//     {
//         accessorKey: "email",
//         header: "Email",
//     },
//     {
//         accessorKey: "amount",
//         header: "Amount",
//     },
// ]

// const options = [
//         "Visualizar",
//         "Editar",
//         "Arquivar",
//     ]

interface DataTableProps<T> {
    columns: ColumnDef<T>[];
    data: T[]
    link: string
    contentLink: string
}

// type TableData =  {
//     id: number;
    
// }

export function DataTable<T>({ columns, data, link, contentLink }: DataTableProps<T>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    // const [open, setOpen] = React.useState(false)
    // const [value, setValue] = React.useState("")
    return (
        <div className="flex flex-col w-full h-[90vh] bg-white p-4 gap-2 rounded-xl">
            <Link href={link} className="w-fit px-4 py-1 rounded-md bg-[#72F2E5]">
                {contentLink}
            </Link>
            <Table className="w-full  ">
                <TableHeader >
                    {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
                        <TableRow key={headerGroup.id} >
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row: Row<T>) => (
                            <TableRow
                                className="hover:bg-[#72F2E5] active:bg-[#76FFF1] justify-between items-center"
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell: Cell<T, unknown>) => (
                                    <TableCell key={cell.id} className="w-1/2 justify-between items-center">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>

                                ))}
                                <RowActions/>
                                {/* className="flex flex-row w-fit p-2 hover:bg-white rounded-md mt-1" */}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
                        {/* <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild className="">
                                <Button
                                    variant="outline"
                                    // role="combobox"
                                    // aria-expanded={open}
                                    className=" bg-transparent border-none shadow-none w-fit hover:bg-gray-50"
                                >
                                    <EllipsisVertical className="size-3" />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-[200px] p-0 border-red-500 z-50" side="bottom">
                                <Command>
                                    <CommandList>
                                        <CommandEmpty>Nenhuma Ação</CommandEmpty>
                                        <CommandGroup>
                                            {options.map((value) => (
                                                <CommandItem
                                                    key={value}
                                                    value={value}
                                                    onSelect={() => {
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {value}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover> */}