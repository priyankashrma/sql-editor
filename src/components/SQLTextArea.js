import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const SQLTextArea = ({ showQuery }) => {
  return (
    <div style={{ display: showQuery ? "block" : "none" }}>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="Minimum 3 rows"
        style={{ width: 200 }}
      />
      <div className="float-end">
        <button type="button" class="btn btn-success">
          Run
        </button>
      </div>
    </div>
  );
};

export default SQLTextArea;

