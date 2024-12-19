/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
  ButtonProps,
  cn,
  buttonVariants,
  useVokadialog,
  Vokadialog,
  FormItem,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Label,
  Badge,
  jsonHelper,
  searchParamsToObject,
} from "@/features/_global";

import {
  ColumnDef,
  ColumnFilter,
  // ColumnFiltersState,
  InitialTableState,
  PaginationState,
  RowData,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowLeft, ArrowRight, Filter } from "lucide-react";
import { Link, URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

declare module "@tanstack/react-table" {
  //allows us to define custom properties for our columns
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: "text" | "select" | "number";
    filterOptions?: {
      label: string;
      value: string | number;
    }[];
    filterLabel?: string;
    filterPlaceholder?: string;
  }
}

export interface BaseDataTableFilterValueItem {
  label: string;
  value: string | number;
}

interface ColumnFilterImproved extends ColumnFilter {
  label?: string;
}

type ColumnFiltersStateImproved = ColumnFilterImproved[];

type ColFilter = ColumnFiltersStateImproved;

export interface VokaDataTableProps {
  columns: ColumnDef<any, any>[];
  data: unknown[];
  dataFallback: unknown[];
  initialState?: InitialTableState;
  globalSearch?: boolean;
  searchPlaceholder?: string;
  isLoading?: boolean;
  renderAction?: React.ReactNode;
  searchParamPagination?: boolean;
  showFilterButton?: boolean;
  actions?: {
    title?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    url?: string;
    variant?: ButtonProps["variant"];
  }[];
}

export const VokaDataTable = ({
  searchPlaceholder = "Search...",
  columns,
  data,
  dataFallback,
  globalSearch = true,
  initialState,
  isLoading = false,
  renderAction,
  searchParamPagination,
  showFilterButton,
  actions,
}: VokaDataTableProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterSearchParams = searchParams.get("filter");

  const filterDialog = useVokadialog();
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
  //   [],
  // );

  const columnFilters: ColFilter = filterSearchParams
    ? jsonHelper.parse(filterSearchParams)
    : [];

  console.log("columnFilter ==>", columnFilters);

  const [globalFilter, setGlobalFilter] = React.useState("");

  const paginationSearchParams = {
    pageIndex: !Number.isNaN(Number(searchParams.get("pageIndex")))
      ? Number(searchParams.get("pageIndex"))
      : 0,
    pageSize: !Number.isNaN(Number(searchParams.get("pageSize")))
      ? Number(searchParams.get("pageSize")) || 20
      : 20,
  };

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: searchParamPagination ? paginationSearchParams.pageIndex : 0,
    pageSize: searchParamPagination ? paginationSearchParams.pageSize : 20,
  });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: data || dataFallback,
    columns: columns as ColumnDef<RowData, any>[],
    onSortingChange: setSorting,
    globalFilterFn: "auto",
    filterFns: {},
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: searchParamPagination ? () => {} : setPagination,
    enableGlobalFilter: globalSearch,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: () => {},
    debugAll: true,
    state: {
      sorting,
      rowSelection,
      columnFilters,
      pagination: searchParamPagination ? paginationSearchParams : pagination,
      ...(globalSearch && { globalFilter }),
    },
    initialState,
  });

  const handleNextPage = () => {
    if (searchParamPagination && table.getCanNextPage()) {
      setSearchParams({
        ...searchParamsToObject(searchParams.toString()),
        pageIndex: String(table.getState().pagination.pageIndex + 1),
      } as URLSearchParamsInit);
      return;
    }

    table.nextPage();
  };

  const handlePrevPage = () => {
    if (searchParamPagination && table.getCanPreviousPage()) {
      setSearchParams({
        ...searchParamsToObject(searchParams.toString()),
        pageIndex: String(table.getState().pagination.pageIndex - 1),
      } as URLSearchParamsInit);
      return;
    }

    table.previousPage();
  };

  const handleFirstPage = () => {
    if (searchParamPagination && table.getCanPreviousPage()) {
      setSearchParams({
        ...searchParamsToObject(searchParams.toString()),
        pageIndex: String(0),
      } as URLSearchParamsInit);
      return;
    }

    table.firstPage();
  };

  const handleLastPage = () => {
    if (searchParamPagination && table.getCanNextPage()) {
      setSearchParams({
        ...searchParamsToObject(searchParams.toString()),
        pageIndex: String(table.getPageCount() - 1),
      } as URLSearchParamsInit);
      return;
    }

    table.lastPage();
  };

  useEffect(() => {
    if (
      searchParamPagination &&
      searchParams.get("pageIndex") === null &&
      searchParams.get("pageSize") === null
    ) {
      setSearchParams({
        ...searchParamsToObject(searchParams.toString()),
        pageSize: String(20),
        pageIndex: String(0),
      } as URLSearchParamsInit);
    }
  }, [searchParams, setSearchParams, searchParamPagination]);

  const renderTableHeader = () => {
    return (
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
    );
  };

  const renderTableBody = () => {
    if (isLoading) {
      return (
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Loading...
            </TableCell>
          </TableRow>
        </TableBody>
      );
    }

    if (!table.getRowModel().rows?.length) {
      return (
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Empty Result
            </TableCell>
          </TableRow>
        </TableBody>
      );
    }

    return (
      <>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    );
  };

  const renderContentFilterDialog = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {table.getHeaderGroups().map((headerGroup) => (
          <React.Fragment key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const columnFilterValue = header.column.getFilterValue();

              const {
                filterLabel,
                filterOptions,
                filterVariant,
                filterPlaceholder,
              } = header.column.columnDef.meta ?? {};

              const isCanFilter =
                !header.isPlaceholder &&
                header.column.getCanFilter() &&
                Boolean(filterVariant);

              return !isCanFilter ? null : (
                <FormItem key={header.id}>
                  {filterVariant === "text" && (
                    <>
                      <Label>{filterLabel}</Label>
                      <Input
                        value={String(columnFilterValue || "")}
                        // onChange={(v) => {}}
                        type="text"
                        placeholder={filterPlaceholder}
                      />
                    </>
                  )}

                  {filterVariant === "select" && (
                    <>
                      <Label>{filterLabel}</Label>
                      <Select
                        value={
                          columnFilterValue
                            ? String(columnFilterValue)
                            : undefined
                        }
                        onValueChange={(v) => {
                          const k = header.column.id;
                          const _v = !Number.isNaN(Number(v)) ? Number(v) : v;
                          let newFilter = [...columnFilters];

                          if (newFilter.find((d) => d.id === k)) {
                            newFilter = newFilter.filter((d) => d.id !== k);
                            newFilter = [
                              ...newFilter,
                              { id: k, value: _v, label: filterLabel },
                            ];
                          } else {
                            newFilter = [
                              ...newFilter,
                              { id: k, value: _v, label: filterLabel },
                            ];
                          }

                          setSearchParams({
                            ...searchParamsToObject(searchParams.toString()),
                            filter: jsonHelper.string(newFilter),
                          } as URLSearchParamsInit);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={filterPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions?.map((option, i) => {
                            return (
                              <SelectItem key={i} value={String(option.value)}>
                                {option.label}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </>
                  )}
                </FormItem>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="w-full">
        {globalSearch && (
          <>
            <div className="flex flex-col sm:flex-row mb-4 gap-2 sm:items-center sm:justify-between">
              <div className="flex-1 order-1 sm:order-none">
                <div className="flex flex-row gap-2">
                  <Input
                    placeholder={searchPlaceholder}
                    value={globalFilter || ""}
                    onChange={(e) => {
                      setGlobalFilter(String(e.target?.value));
                    }}
                    className="sm:max-w-[300px] flex-1"
                  />
                  {showFilterButton && (
                    <Button onClick={() => filterDialog.open()} size="icon">
                      <Filter size={16} />
                    </Button>
                  )}
                </div>
              </div>
              <div>
                {renderAction ||
                  actions?.map((action, i) => {
                    return action.url ? (
                      <Link
                        key={i}
                        className={cn(
                          buttonVariants({
                            variant: action?.variant || "default",
                          }),
                          "w-full sm:w-auto",
                        )}
                        to={action.url}
                      >
                        {action.icon ? (
                          <>
                            {action.icon}
                            <span className="ml-2">{action.title}</span>
                          </>
                        ) : (
                          action.title
                        )}
                      </Link>
                    ) : (
                      <Button
                        key={i}
                        onClick={action.onClick}
                        variant={action.variant || "default"}
                      >
                        {action.icon ? (
                          <>
                            {action.icon}
                            <span className="ml-2">{action.title}</span>
                          </>
                        ) : (
                          action.title
                        )}
                      </Button>
                    );
                  })}
              </div>
            </div>
            {columnFilters?.length > 0 ? (
              <div className="flex flex-row gap-2 mb-2">
                {columnFilters.map((c) => {
                  return (
                    <Badge className="text-white">{`${c.label}: ${c.value}`}</Badge>
                  );
                })}
              </div>
            ) : null}
          </>
        )}

        <div className="rounded-md border">
          <Table>
            {renderTableHeader()}
            {renderTableBody()}
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {`${table.getFilteredRowModel().rows.length} / ${data.length} data`}
          </div>
          <div className="flex flex-row gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleFirstPage}
              disabled={!table.getCanPreviousPage()}
            >
              First
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={!table.getCanPreviousPage()}
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={!table.getCanNextPage()}
            >
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLastPage}
              disabled={!table.getCanNextPage()}
            >
              Last
            </Button>
          </div>
        </div>
      </div>
      <Vokadialog
        title="Filter"
        visible={filterDialog.visible}
        onOpenChange={filterDialog.setVisible}
        content={renderContentFilterDialog()}
        footer={
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button onClick={filterDialog.close} className="w-full">
              Apply
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setSearchParams({
                  ...searchParamsToObject(searchParams.toString()),
                  filter: jsonHelper.string([]),
                } as URLSearchParamsInit);
                filterDialog.close();
              }}
              className="w-full"
            >
              Reset
            </Button>
          </div>
        }
      />
    </>
  );
};
