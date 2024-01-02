"use client";

import React, { useContext, useEffect, useMemo, useState } from 'react'
import {
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useSortBy,
    useTable,
} from "react-table";
import AllVerifiersTableHeader from './tableColumn';
import Actions from './tableActions';
import { verifiersData } from './mockData';
import TableCheckbox from '@/_shared/components/Table/TableCheckbox';
import { Button, MenuItem, Select } from '@mui/material';
import TableSearch from '@/_shared/components/Table/TableSearch';
import Image from 'next/image';
import { plus } from '@/_shared/assets/icons';
import TableLayout from '@/_shared/components/Table/TableLayout';
import TablePagination from '@/_shared/components/Table/TablePagination';
import DataTableCard from '@/_shared/components/DataTableCard';
import AppContext from '@/_lib/contextApi';

const Verifiers = () => {
    const {setBreadcrumbsData} = useContext(AppContext);
    const [retrieveData, setRetrieveData] = useState<any[]>([]);
    const [filterVerifiers, setFilterVerifiers] = useState<string>("");

    const data = useMemo(() => {
        if (retrieveData) {
            return retrieveData;
        }
        
        return [{}];
    }, [retrieveData]);

    const [selectedRowValues, setSelectedRowValues] = useState({});

    const columns: any = useMemo(
        () =>
        AllVerifiersTableHeader((item) => (
            <Actions/>
          )),
        []
    );

    useEffect(() => {
        if (verifiersData) {
            setRetrieveData(verifiersData);
        }

        setBreadcrumbsData({
            pathName: 'Verifiers',
            length: String(verifiersData.length || 0)
        })

    }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        selectedFlatRows,
        state: { selectedRowIds },
        toggleAllRowsSelected,
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
          hooks.visibleColumns.push((columns) => [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <TableCheckbox {...getToggleAllRowsSelectedProps()} />
              ),
              Cell: ({ row }: any) => (
                <TableCheckbox {...row.getToggleRowSelectedProps()} />
              ),
            },
            ...columns,
          ]);
        }
    );
    
    const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className='space-y-8'>
        <div className='py-3 px-4 flex flex-row items-center justify-between'>
            <div className='rounded-lg flex flex-row border-[1px] text-sm text-black-200 font-semibold'>
                <Select
                    value={filterVerifiers}
                    onChange={(e) => setFilterVerifiers(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    className='mt-2'
                    name={"state"}
                >
                    <MenuItem value="">
                        <p className="text-base text-black-200">Filter status</p>
                    </MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"Active Verifiers"}>Active Verifiers</MenuItem>
                    <MenuItem value={"Pending Verifiers"}>Pending Verifiers</MenuItem>
                    <MenuItem value={"Deactivated Verifiers"}>Deactivated Verifiers</MenuItem>
                </Select>
            </div>
            <div className="mt-3 space-x-4 lg:mt-0 w-full flex flex-row lg:w-[17.875rem] xl:w-[30rem] ">
                <div className="flex-1">
                    <TableSearch
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                        placeholder={"Name/Phone no / Location"}
                    />
                </div>

                <div className=''>
                    <Button
                        variant="contained"
                        className="[&.MuiButtonBase-root]:h-[40px] text-sm"
                        // fullWidth
                        onClick={()=>null }
                        startIcon={
                            <Image
                            height={24}
                            className=""
                            width={24}
                            src={plus}
                            alt="plus_icon"/>
                            }
                    >
                        <span className="text-sm font-semibold">Add New Verifier</span>
                    </Button>
                </div>

            </div>
        </div>

        <DataTableCard>
            <div className="overflow-x-auto w-full">
                <TableLayout
                    getTableProps={getTableProps}
                    headerGroups={headerGroups}
                    getTableBodyProps={getTableBodyProps}
                    retrieveData={data}
                    page={page}
                    prepareRow={prepareRow}
                />
            </div>
        
            <TablePagination
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageCount={pageCount}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
            />
        </DataTableCard>

        
    </div>
  )
}

export default Verifiers