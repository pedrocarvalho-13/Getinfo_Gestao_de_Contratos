"use client"

// import { HeaderGroup, Row, Cell } from '@tanstack/react-table'


import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    HeaderGroup,
    Row,
    Cell,
    SortingState
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"

import React from "react"
import RowActions from "../testePopup"
import Link from "next/link"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"


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
    const [sorting] = React.useState<SortingState>([])

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters
        },
        globalFilterFn: (row, columnId, filterValue) => {
            return String(row.getValue(columnId))
                .toLowerCase()
                .includes(filterValue.toLowerCase());
        }
    })

    return (
        <div className="flex flex-col w-full h-[90vh] bg-gray-50  justify-between p-4 gap-2 rounded-tl-xl">
            <div className="h-full ">

                <div className="flex justify-between items-center py-2">
                    <Link href={link} className="w-fit px-4 py-1 rounded-md bg-[#72F2E5] text-sm">
                        {contentLink}
                    </Link>
                    <div className="flex flex-row items-center justify-center w-fit h-fit gap-2">

                        <p>Filtros: </p>
                        <Input
                            placeholder="Filtre por algo específico"
                            value={table.getState().globalFilter ?? ""}
                            onChange={(event) => table.setGlobalFilter(event.target.value)
                            }
                            className="w-[20vw] border-gray-500 bg-white "
                        />
                    </div>
                </div>
                <Table className="w-full  ">
                    <TableHeader >
                        {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
                            <TableRow key={headerGroup.id} className="w-full" >
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="text-center" >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                                <p className="mt-5 text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Ações</p>
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row: Row<T>) => (
                                <TableRow
                                    className="w-full hover:bg-[#72F2E5] active:bg-[#76FFF1] justify-between items-center"
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell: Cell<T, unknown>) => (
                                        <TableCell key={cell.id} className="  justify-between items-center text-center  ">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>

                                    ))}
                                    <RowActions />
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
            <div className="flex flex-row w-full items-center justify-between ">

                <div>
                    <p>{data.length + 1} items</p>
                </div>
                <div className="flex items-center justify-center space-x-2 py-4.2">
                    <Button
                        className="hover:bg-[#72F2E5] bg-[#72F2E5] active:bg-[#76FFF1]"
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft />
                    </Button>
                    <p>{table.getState().pagination.pageIndex + 1} de {table.getPageCount()}</p>
                    <Button
                        className="hover:bg-[#72F2E5] bg-[#72F2E5] active:bg-[#76FFF1]"
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}
