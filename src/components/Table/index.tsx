import React from 'react';
import DataTable from 'react-data-table-component';
import { customStyles } from './styles';

interface TableProps {
  title?: string;
  columns: any;
  data: any;
  pointerOnHover?: boolean;
  highlightOnHover?: boolean;
  striped?: boolean;
  selectable?: boolean;
  onRowClicked?: (row: any, event: any) => void;
  dense?: boolean;
  progressPending?: any;
  onSelectedRowsChange?: any;
}

const Table: React.FC<TableProps> = ({
  title,
  columns,
  data,
  onRowClicked,
  pointerOnHover = true,
  highlightOnHover = true,
  striped = true,
  dense = false,
  progressPending,
  selectable = false,
  onSelectedRowsChange,
}) => {
  return (
    <DataTable
      title={title}
      columns={columns}
      data={data}
      pointerOnHover={pointerOnHover}
      highlightOnHover={highlightOnHover}
      striped={striped}
      customStyles={customStyles}
      onRowClicked={onRowClicked}
      fixedHeader={true}
      selectableRows={selectable}
      onSelectedRowsChange={onSelectedRowsChange}
      fixedHeaderScrollHeight='100%'
      responsive
      dense={dense}
    />
  );
};

export default Table;
