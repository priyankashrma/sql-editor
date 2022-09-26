import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const RightSideBar = ({ cols }) => (
  <Card class="m-1">
    <Button variant="text">New Query</Button>
    <Button variant="text">Recent Queries</Button>
    {cols && (
      <>
        <Typography variant="h6" sx={{ mt: 5 }}>
          Columns:
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {cols.split(",").map((a) => (
            <ListItem sx={{ my: 0 }}>
              <ListItemText primary={a} secondary={typeof a} sx={{ my: 0 }} />
            </ListItem>
          ))}
        </List>
      </>
    )}
  </Card>
);

export default RightSideBar;

