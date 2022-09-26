import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const RightSideBar = ({ cols, setSql, setTextData }) => {
  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          setSql("");
          setTextData("");
        }}
      >
        New Query
      </Button>
      <Button variant="text">Save Query</Button>
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
    </>
  );
};

export default RightSideBar;

