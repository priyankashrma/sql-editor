import React from "react";
import Button from "@mui/material/Button";

const HelperFunctions = ({ selection }) => (
  <>
    <Button
      variant="outlined"
      sx={{ my: 1, ml: 1 }}
      disabled={selection.length <= 0 || selection.length > 1}
    >
      Edit
    </Button>
    <Button
      variant="outlined"
      sx={{ my: 1, ml: 1 }}
      disabled={selection.length <= 0}
    >
      Copy
    </Button>
    <Button
      variant="outlined"
      sx={{ my: 1, ml: 1 }}
      disabled={selection.length <= 0}
    >
      Delete
    </Button>
    <Button variant="outlined" sx={{ my: 1, ml: 1 }}>
      CSV Export
    </Button>
    <Button variant="outlined" sx={{ my: 1, ml: 1 }}>
      Print
    </Button>
  </>
);

export default HelperFunctions;

