import React, { forwardRef, useRef } from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import clsx from 'clsx';


export interface TableProps extends AgGridReactProps {
  wrapperclassName?: string;
  suppressHorizontalScroll?: boolean;
}

const Table = forwardRef<AgGridReact, TableProps>(function (
  { wrapperclassName, suppressHorizontalScroll = true, ...props }, ref) {

  const gridRef = useRef(null);

  const onGridSizeChanged = (params) => {
    let gridWidth = gridRef.current.offsetWidth;
    let columnsToShow = [];
    let columnsToHide = [];
    let totalColsWidth = 0;
    let allColumns = params.columnApi.getAllColumns();
    for (let i = 0; i < allColumns.length; i++) {
      let column = allColumns[i];
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  };

  return (
    <div style={{ width: "100%", height: "100%" }} >
      <div ref={gridRef} style={{ width: "100%", height: "100%" }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className={clsx("ag-theme-material", wrapperclassName)}
        >
          <AgGridReact
            domLayout='autoHeight'
            ref={ref}
            {...props}
            suppressHorizontalScroll={suppressHorizontalScroll}
            onGridSizeChanged={suppressHorizontalScroll && onGridSizeChanged}
          />
        </div>
      </div>
    </div >
  );
});

export default Table;