import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import CircularProgress from "@mui/material/CircularProgress";

import { Wrapper } from "../styles";
import Editor from "../components/Editor";
import ResultTable from "../components/ResultTable";
import RightSideBar from "../components/RightSideBar";

const MainContent = ({
  tableData,
  data,
  sql,
  setSql,
  loading,
  setTextData,
}) => {
  const splitData = data.length > 0 && data.split(/\r?\n/);
  const cols = splitData[0];

  const [editable, setEditable] = useState(true);

  function onFilter(value) {
    if (value) {
      const rows = splitData.slice(1, splitData.length);
      const filteredRows = rows
        .filter((a) => a.toLowerCase().includes(value.toLowerCase()))
        .join("\n");
      setTextData(cols + "\n" + filteredRows);
    } else {
      setTextData(data);
    }
  }

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={10}>
          {editable ? (
            <Wrapper>
              <Editor sql={sql} setSql={setSql} />
            </Wrapper>
          ) : (
            <Card sx={{ p: 2 }}>{sql}</Card>
          )}

          <div style={{ width: "100%", height: "30px" }}>
            {editable ? (
              <Button
                sx={{ mt: 1, float: "right" }}
                variant="contained"
                onClick={() => setEditable(false)}
              >
                Run Query
              </Button>
            ) : (
              <Button
                sx={{ mt: 1, float: "right" }}
                variant="contained"
                onClick={() => setEditable(true)}
              >
                Edit Query
              </Button>
            )}
          </div>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="success" />
            </div>
          ) : (
            <ResultTable tableData={tableData} onChange={onFilter} />
          )}
        </Grid>
        <Grid item xs={2}>
          <RightSideBar cols={cols} setSql={setSql} setTextData={setTextData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;

