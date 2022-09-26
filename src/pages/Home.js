import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { readString } from "react-papaparse";
import Typography from "@mui/material/Typography";

import PermanentDrawerLeft from "../components/Drawer";
import MainContent from "../sections/MainContent";

const drawerWidth = 240;

export default function Home() {
  const [sql, setSql] = useState("");
  const [data, setData] = useState([]);
  const [textData, setTextData] = useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (tableName) => {
    setLoading(true);
    setSql(`select * from ${tableName}`);
    await fetch(
      `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${tableName}.csv`
    )
      .then((response) => response.text())
      .then((data) => {
        setTextData(data);
        setData(data);
      });
  };

  useEffect(() => {
    readString(textData, {
      worker: true,
      complete: (results) => {
        setTableData(results.data);
        setLoading(false);
      },
    });
  }, [textData]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Atlan SQL
          </Typography>
        </Toolbar>
      </AppBar>
      <PermanentDrawerLeft drawerWidth={drawerWidth} fetchData={fetchData} />
      <MainContent
        sql={sql}
        data={data}
        setSql={setSql}
        loading={loading}
        tableData={tableData}
        setTextData={setTextData}
      />
    </Box>
  );
}

