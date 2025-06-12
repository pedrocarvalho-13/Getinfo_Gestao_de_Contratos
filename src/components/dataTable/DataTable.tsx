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
// import RowActions from "../testePopup"
import Link from "next/link"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, Clipboard, Edit, LoaderCircle, Plus, Trash2, FileText, Calculator } from "lucide-react"

import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

interface DataTableProps<T> {
    columns: ColumnDef<T>[];
    data: T[]
    link: string
    contentLink: string
    entityBasePath?: string; // "/empresas", "/contratos", etc.
    onDelete?: (id: number) => void;
}

// type TableData =  {
//     id: number;

// }

export function DataTable<T>({ columns, data, link, contentLink, entityBasePath, onDelete }: DataTableProps<T>) {
    const [sorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [loadingId, setLoadingId] = React.useState<{ id: number; action: string } | null>(null);

    const router = useRouter();

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
            return String(row.getValue(columnId)).toLowerCase().includes(filterValue.toLowerCase());
        }
    });

    function getIdFromRow(row: any): number | null {
        const possibleKeys = ['id', 'idContrato', 'idContratante'];
        for (const key of possibleKeys) {
            if (row[key]) {
                return row[key];
            }
        }
        return null;
    }

    return (
        <div className="flex flex-col w-full h-[90vh] bg-gray-50 justify-between p-4 gap-2 rounded-tl-xl">
            <div className="h-full">
                <div className="flex justify-between items-center py-2">
                    <Link href={link} className="flex items-center justify-center gap-2 w-fit px-4 py-2 rounded-md bg-[#4ccec1] hover:bg-[#4bc0b5] text-sm">
                        <Plus className="size-4" /> {contentLink}
                    </Link>
                    <div className="flex flex-row items-center justify-center w-fit h-fit gap-2">
                        <p>Filtros: </p>
                        <Input
                            placeholder="Filtre por algo específico"
                            value={table.getState().globalFilter ?? ""}
                            onChange={(event) => table.setGlobalFilter(event.target.value)}
                            className="w-[20vw] border-gray-500 bg-white"
                        />
                    </div>
                </div>

                <Table className="w-full">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
                            <TableRow key={headerGroup.id} className="w-full">
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id} className="text-center">
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                                <TableHead className="flex  text-foreground h-10 px-2 text-center items-center  justify-center font-medium whitespace-nowrap">
                                    Ações
                                </TableHead>
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row: Row<T>) => {
                                const rowData = row.original;
                                const id = getIdFromRow(rowData);

                                return (
                                    <TableRow key={row.id} className="w-full hover:bg-[#72F2E5] active:bg-[#76FFF1]">
                                        {row.getVisibleCells().map((cell: Cell<T, unknown>) => (
                                            <TableCell key={cell.id} className="text-center">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                        <div className="flex items-center justify-center">

                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Button
                                                        onClick={async () => {
                                                            if (id) {
                                                                setLoadingId({ id, action: "edit" });
                                                                router.push(`${entityBasePath}/update/${id}`);
                                                            }
                                                        }}
                                                        className="bg-transparent text-[black] hover:bg-[#5fb0a8]"
                                                        disabled={loadingId?.id === id}
                                                    >
                                                        {loadingId?.id === id && loadingId?.action === "edit" ? (
                                                            <LoaderCircle className="animate-spin" />
                                                        ) : (
                                                            <Edit />
                                                        )}
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Editar</p>
                                                </TooltipContent>
                                            </Tooltip>

                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Button
                                                        onClick={async () => {
                                                            if (id) {
                                                                setLoadingId({ id, action: "view" });
                                                                router.push(`${entityBasePath}/view/${id}`);
                                                            }
                                                        }}
                                                        className="bg-transparent text-[black] hover:bg-[#5fb0a8]"
                                                        disabled={loadingId?.id === id}
                                                    >
                                                        {loadingId?.id === id && loadingId?.action === "view" ? (
                                                            <LoaderCircle className="animate-spin" />
                                                        ) : (
                                                            <Clipboard />
                                                        )}
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Visualizar</p>
                                                </TooltipContent>
                                            </Tooltip>

                                            {entityBasePath === "/contratos" && (
                                                <>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Button
                                                                onClick={async () => {
                                                                    if (id) {
                                                                        setLoadingId({ id, action: "aditivo" });
                                                                        router.push(`${entityBasePath}/aditivo/${id}`);
                                                                    }
                                                                }}
                                                                className="bg-transparent text-[black] hover:bg-[#5fb0a8]"
                                                                disabled={loadingId?.id === id}
                                                            >
                                                                {loadingId?.id === id && loadingId?.action === "aditivo" ? (
                                                                    <LoaderCircle className="animate-spin" />
                                                                ) : (
                                                                    <FileText />
                                                                )}
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Aditivos</p>
                                                        </TooltipContent>
                                                    </Tooltip>

                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Button
                                                                onClick={async () => {
                                                                    if (id) {
                                                                        setLoadingId({ id, action: "repactuacao" });
                                                                        router.push(`${entityBasePath}/repactuacao/${id}`);
                                                                    }
                                                                }}
                                                                className="bg-transparent text-[black] hover:bg-[#5fb0a8]"
                                                                disabled={loadingId?.id === id}
                                                            >
                                                                {loadingId?.id === id && loadingId?.action === "repactuacao" ? (
                                                                    <LoaderCircle className="animate-spin" />
                                                                ) : (
                                                                    <Calculator />
                                                                )}
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Repactuação</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </>
                                            )}

                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Button
                                                        onClick={async () => {
                                                            if (id && onDelete) {
                                                                const confirmDelete = confirm("Tem certeza que deseja excluir?");
                                                                if (confirmDelete) {
                                                                    setLoadingId({ id, action: "delete" });
                                                                    await onDelete(id);
                                                                }
                                                                setLoadingId(null);
                                                            }
                                                        }}
                                                        className="bg-transparent text-[black] hover:bg-[#5fb0a8]"
                                                        disabled={loadingId?.id === id}
                                                    >
                                                        {loadingId?.id === id && loadingId?.action === "delete" ? (
                                                            <LoaderCircle className="animate-spin" />
                                                        ) : (
                                                            <Trash2 />
                                                        )}
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Arquivar</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    <LoaderCircle className="text-[#72F2E5] m-auto animate-spin size-15" />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex flex-row w-full items-center justify-between">
                <div>
                    <p>{data.length} items</p>
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
    );
}
