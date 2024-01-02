import { Column } from "react-table";
import React from "react";

const AllTransactionsTableHeader = (
  action: (item: any) => void
): readonly Column<any>[] => [
  {
    Header: "First Name",
    accessor: 'first_name',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "Last Name",
    accessor: 'last_name',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "Phone Number",
    accessor: 'phone_number',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "Partner",
    accessor: 'partner',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "Location",
    accessor: 'location',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "Status",
    accessor: 'status',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <div className="flex flex-col w-full">
            <p className={`${value.toLocaleLowerCase() === "active" ? "bg-success-25 text-success-50" : value.toLocaleLowerCase() === "awaiting approval" ? "text-warning-100 bg-warning-25" :  "bg-error-25 text-error-50"} text-xs w-fit rounded-2xl font-medium flex flex-row py-[0.25rem] px-2`}>
                {value}
            </p>
          </div>
        );
      }
      return "N/A";
    },
  },

  {
    id: "action",
    accessor: (item: any) => {
      return <>{action(item)}</>;
    },
  },
];

export default AllTransactionsTableHeader;