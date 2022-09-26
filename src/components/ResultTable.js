import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";

import HelperFunctions from "./HelperFunctions";

export default function DataTable({ tableData, onChange }) {
  const rows = [];
  const columns = [];

  const [selection, setSelection] = useState([]);

  let colsNameArray = [];
  let rowsArray = [];

  if (tableData && tableData.length) {
    colsNameArray = tableData[0];
    colsNameArray.map((a) => columns.push({ field: a, label: a, width: 100 }));
    rowsArray = tableData.slice(1, tableData.length);
  }

  for (let i = 0; i < tableData.length; i += 1) {
    const currentRow = rowsArray[i];
    if (currentRow && currentRow.length === colsNameArray.length) {
      rows.push(createData(i, currentRow));
    }
  }

  function createData(i, selection) {
    const rowObject = {};
    rowObject.id = i;
    colsNameArray.map((a, index) => {
      rowObject[a] = selection[index];
      return null;
    });
    return rowObject;
  }

  return (
    <div style={{ height: 400, width: "100%", marginTop: "10px" }}>
      <TextField
        id="outlined-basic"
        label="Filter Results"
        variant="outlined"
        size="small"
        sx={{ my: 1 }}
        onChange={(e) => onChange(e.target.value)}
      />
      <HelperFunctions selection={selection} />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        selectionModel={selection}
        onSelectionModelChange={(selection) => {
          setSelection(selection);
        }}
      />
    </div>
  );
}

