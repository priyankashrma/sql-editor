import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import TableIcon from "@mui/icons-material/TableChartOutlined";

import allTables from "../data/allTables";

export default function PermanentDrawerLeft({ drawerWidth, fetchData }) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <img src="/logo.svg" width={100} alt="atlan logo" />
      </Toolbar>

      <Divider />
      <Typography variant="h6" sx={{ ml: 2, mt: 1 }}>
        All Tables
      </Typography>
      <List>
        {allTables.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => fetchData(text)}>
              <ListItemIcon>{<TableIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

